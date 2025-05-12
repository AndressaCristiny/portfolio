"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  index: number;
  headline: string;
  button: string;
  src: string;
}

interface SliderProps {
  heading: string;
  slides: Slide[];
}

export default function Slider({ heading, slides }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Get slide index with wrapping
  const getSlideIndex = (current: number, offset: number) => {
    return (current + offset + slides.length) % slides.length;
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  // Auto-advance slides
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide]);

  // Touch events for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  // Get animation classes based on position and animation state
  const getSlideClasses = (position: "prev" | "current" | "next") => {
    const baseClasses = "absolute transition-all duration-700 ease-in-out";

    if (!isAnimating) {
      // Default positions when not animating
      if (position === "prev")
        return cn(
          baseClasses,
          "left-0 opacity-70 z-10 w-[40%] h-[80%] transform -translate-x-[25%] translate-y-0"
        );
      if (position === "current")
        return cn(
          baseClasses,
          "left-1/2 opacity-100 z-20 w-[60%] h-full transform -translate-x-1/2 translate-y-0"
        );
      if (position === "next")
        return cn(
          baseClasses,
          "right-0 opacity-70 z-10 w-[40%] h-[80%] transform translate-x-[25%] translate-y-0"
        );
    } else {
      // During animation
      if (direction === 1) {
        // Moving right
        if (position === "prev")
          return cn(
            baseClasses,
            "left-0 opacity-0 z-0 w-[40%] h-[80%] transform -translate-x-full translate-y-0"
          );
        if (position === "current")
          return cn(
            baseClasses,
            "left-0 opacity-70 z-10 w-[40%] h-[80%] transform -translate-x-[25%] translate-y-0"
          );
        if (position === "next")
          return cn(
            baseClasses,
            "left-1/2 opacity-100 z-20 w-[60%] h-full transform -translate-x-1/2 translate-y-0"
          );
      } else {
        // Moving left
        if (position === "prev")
          return cn(
            baseClasses,
            "left-1/2 opacity-100 z-20 w-[60%] h-full transform -translate-x-1/2 translate-y-0"
          );
        if (position === "current")
          return cn(
            baseClasses,
            "right-0 opacity-70 z-10 w-[40%] h-[80%] transform translate-x-[25%] translate-y-0"
          );
        if (position === "next")
          return cn(
            baseClasses,
            "right-0 opacity-0 z-0 w-[40%] h-[80%] transform translate-x-full translate-y-0"
          );
      }
    }
    return baseClasses;
  };

  return (
    <div className="w-full py-10 px-4 md:px-8 bg-background">
      <h2 className="text-3xl font-bold mb-6 text-center">{heading}</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Slider container */}
        <div
          ref={sliderRef}
          className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous slide */}
          <div className={getSlideClasses("prev")} onClick={prevSlide}>
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <Image
                src={
                  slides[getSlideIndex(currentSlide, -1)].src ||
                  "/placeholder.svg"
                }
                alt="Previous slide"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>

          {/* Current slide */}
          <div className={getSlideClasses("current")}>
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={slides[currentSlide].src || "/placeholder.svg"}
                alt={slides[currentSlide].headline}
                fill
                className="object-cover"
                priority
              />
              {/* Content overlay with animation */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6 text-center">
                <div
                  className={cn(
                    "transform transition-all duration-700 delay-100",
                    isAnimating
                      ? "opacity-0 translate-y-8"
                      : "opacity-100 translate-y-0"
                  )}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    {slides[currentSlide].headline}
                  </h3>
                  <button className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white border border-white rounded-md transition-colors">
                    {slides[currentSlide].button}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Next slide */}
          <div className={getSlideClasses("next")} onClick={nextSlide}>
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <Image
                src={
                  slides[getSlideIndex(currentSlide, 1)].src ||
                  "/placeholder.svg"
                }
                alt="Next slide"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </div>

        {/* Navigation arrows with animation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={`indicator-${slide.index}`}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentSlide === index
                  ? "bg-white scale-125 w-6"
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-200 mt-4 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
