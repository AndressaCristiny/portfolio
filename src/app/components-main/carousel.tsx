import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  //useCarousel,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import { carouselData } from "@/data/carousel-data";
// import Autoplay from "embla-carousel-autoplay";

export default function ProjectsCarousel() {
  // const plugin = useRef(
  //   Autoplay({ delay: 5000, stopOnInteraction: true }) // 3s por slide
  // );
  return (
    <>
      <div
        id="projetos"
        className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 py-24 sm:py-32"
      >
        {/* <h2 className="text-center text-base/7 font-semibold text-indigo-600"> */}
        <h2 className="text-center text-base/7 font-semibold text-indigo-700">
          Inspiração, Código e Design
        </h2>
        {/* <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl"> */}
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-300 sm:text-5xl">
          Criando experiências que conectam pessoas e ideias.
        </p>
      </div>

      <Carousel
        /*plugins={[plugin.current]}*/ className="w-full md:w-3/4 mx-auto"
      >
        <CarouselContent>
          {carouselData.map((slide, index) => (
            <CarouselItem
              key={index}
              className="px-4 md:basis-1/2 lg:basis-1/3 p-5"
            >
              <Card className="overflow-hidden rounded-2xl border border-gray-900 bg-gray-950 shadow-lg shadow-blue-500/10 transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative w-full h-40">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${
                      slide.cover
                    }`}
                    alt="Cover"
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    {/* <Image
                  src={slide.avatar}
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border border-white/10"
                /> */}
                    <div>
                      <h2 className="text-lg font-semibold text-white">
                        {slide.name}
                      </h2>
                      <p className="text-sm text-slate-300">{slide.role}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-200 leading-snug">
                    {slide.description}
                  </p>

                  <div className="pt-2">
                    <a href={slide.link} target="_blank">
                      <ExternalLink className="w-5 h-5 text-green-600 cursor-pointer" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-zinc-800/60 text-white hover:text-white/50 hover:bg-zinc-700 border border-white/10 shadow-lg backdrop-blur-sm transition-colors duration-200" />
        <CarouselNext className="bg-zinc-800/60 text-white hover:text-white/50 hover:bg-zinc-700 border border-white/10 shadow-lg backdrop-blur-sm transition-colors duration-200" />
      </Carousel>
    </>
  );
}
