import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AboutPatterns from "./designs/About.jsx";
import { verticalChecker } from "../assets/images";

const About = () => {
  const aboutRef = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "20% center",
        },
      });
      tl.fromTo(
        ".about-text",
        {
          y: -500,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.25,
          ease: "back.out",
        }
      );
      tl.fromTo(
        ".absolute",
        { scale: 0, rotate: 180 },
        {
          scale: 1,
          rotate: 0,
          stagger: 0.5,
          transformOrigin: "center",
        }
      );
    },
    { scope: aboutRef }
  );
  return (
    <section ref={aboutRef} className="relative">
      <AboutPatterns />
      <div>
        <div className="flex">
          <div>
            <img src={verticalChecker} className="object-cover h-full" />
          </div>
          <div
            id="test"
            className="relative flex flex-col gap-8 padding z-20 lg:mx-32"
          >
            <h1 className="title mb-4 about-text">About Us</h1>
            <p className="font-gotham text-olive about-text">
              <span className="text-2xl font-bright-retro text-purple">
                Beak & Bite{" "}
              </span>
              adalah perusahaan makanan cepat saji yang berdedikasi untuk
              menyajikan makanan lezat dan berkualitas tinggi kepada pelanggan.
              Beridiri sejak tahun 2024, Beak & Bite telah berkembang pesat dan
              menjadi salah satu pilihan utama bagi pecinta makanan cepat saji.
              Kami menawarkan berbagai macam menu yang menggugah selera, mulai
              dari crispy chicken, burger, kentang goreng, dan lain-lain.
            </p>
            <p className="font-gotham text-olive about-text">
              <span className="text-2xl font-bright-retro text-purple">
                Beak & Bite{" "}
              </span>{" "}
              berkomitmen untuk memberikan pengalaman makan yang menyenangkan
              dan memuaskan bagi setiap pelanggan. Dengan tagline kami,
              <span className="text-2xl font-bright-retro text-purple">
                &apos;Take a Bite, Take a Taste.&apos;{" "}
              </span>
              kami mengundang setiap pelanggan untuk merasakan kelezatan yang
              kami tawarkan dalam setiap gigitan. Kami percaya bahwa pengalaman
              makan yang memuaskan dimulai dari gigitan pertama, dan itulah yang
              kami janjikan kepada setiap pelanggan.
            </p>
          </div>
          <div>
            <img src={verticalChecker} className="object-cover h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
