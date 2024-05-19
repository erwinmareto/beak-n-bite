import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { foods } from "../assets/images";

const Showcase = () => {
  const showcaseRef = useRef(null);
  const showcaseContent = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        showcaseContent.current.children,
        { opacity: 0, y: -200 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "bounce.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: showcaseContent.current,
            start: "top center",
          },
        }
      );
    },
    { scope: showcaseRef }
  );
  return (
    <section ref={showcaseRef} className="relative my-32">
      <img src={foods} alt="food photos" width={1440} />
      <div ref={showcaseContent} className="text-center my-32">
        <h1
          id="showcase-1"
          className="font-gotham text-olive text-xl lg:text-4xl"
        >
          Mau Outlet Selanjutnya
        </h1>
        <h1 className="font-bright-retro text-coral text-3xl lg:text-8xl">
          Jadi Milik Anda?
        </h1>
        <button className="font-gotham text-primary text-xl bg-purple p-6 rounded-full mt-4 transition hover:scale-105 active:scale-90">
          Amankan Sekarang
        </button>
      </div>
    </section>
  );
};
export default Showcase;
