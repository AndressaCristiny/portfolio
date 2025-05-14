"use client";
import Banner from "./components/banner";
import "./styles/background.css";
import ProjectsCarousel from "./components-main/carousel";
import Stacks from "./components-main/stacks";
import CardStatcks from "./components-main/card-stacks";
import AboutMe from "./components-main/about-me";
import Contact from "./components-main/contact";

export default function Home() {
  return (
    <div className="w-full content">
      <Banner />

      <ProjectsCarousel />

      <Stacks />

      <CardStatcks className="mb-40" />

      <AboutMe />

      <Contact />
    </div>
  );
}
