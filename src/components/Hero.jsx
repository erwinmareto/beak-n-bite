import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroImg, shortChecker } from "../assets/images";
import HeroPatterns from "./designs/Hero";
const Hero = () => {
  const heroRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, x: -500 },
        { opacity: 1, x: 0, stagger: 0.5, duration: 1.5, ease: "back.out" }
      );
      gsap.fromTo(
        ".hero-img",
        { opacity: 0, x: 500 },
        { opacity: 1, x: 0, duration: 1.5, ease: "back.out" }
      );
      tl.fromTo(
        ".hero",
        { scale: 0, rotate: 180 },
        { scale: 1, stagger: 1, duration: 1, rotate: 0, ease: "circ.out" }
      );
    },
    { scope: heroRef }
  );
  return (
    <section ref={heroRef} className="relative">
      <img src={shortChecker} className="absolute top-0" />
      <div className="flex justify-center items-center padding max-lg:flex-col">
        <div className="lg:w-1/2 max-lg:text-center">
          <h1 className="text-2xl font-bright-retro text-olive mb-4 lg:text-4xl relative z-20 hero-text">
            Beak & Bite
          </h1>
          <h3 className="text-4xl font-bright-retro text-purple lg:text-8xl relative z-20 hero-text">
            Take a Bite, Take a Taste.
          </h3>
          <HeroPatterns />
        </div>
        <img src={heroImg} className="lg:w-1/2 hero-img" />
      </div>
      <img src={shortChecker} className="absolute bottom-0" />
    </section>
  );
};

export default Hero;
