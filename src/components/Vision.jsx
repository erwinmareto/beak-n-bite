import { useRef } from "react";
import VisionPatterns from "./designs/Vision";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Vision = () => {
  const visionRef = useRef(null);
  const visionText = useRef(null);
  const missionText = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: visionRef.current,
          start: "20% center",
        },
      });
      tl.fromTo(
        visionRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          stagger: 1,
          duration: 1,
          ease: "circ.out",
          transformOrigin: "left",
        }
      );
      tl.fromTo(
        visionText.current.children,
        { opacity: 0, x: -500 },
        { opacity: 1, x: 0, stagger: 0.2, duration: 1, ease: "back.out" }
      );

      tl.fromTo(
        missionText.current.children,
        { opacity: 0, x: 500 },
        { opacity: 1, x: 0, stagger: 0.2, duration: 1, ease: "back.out" }
      );

      tl.fromTo(
        ".absolute",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power1.in",
          transformOrigin: "center",
        }
      );
    },
    { scope: visionRef }
  );
  return (
    <section ref={visionRef} className="relative bg-coral padding">
      <VisionPatterns />
      <div className="flex justify-between items-start gap-8 max-lg:flex-col">
        <article ref={visionText} className="max-w-lg">
          <h1 className="title mb-4">Visi</h1>
          <p className="font-gotham text-primary">
            Menjadi pilihan utama konsumen untuk makanan cepat saji berkualitas
            tinggi yang menawarkan cita rasa unik dan kepuasan maksimal di
            setiap gigitannya{" "}
          </p>
        </article>
        <article ref={missionText} className="max-w-lg">
          <h1 className="title mb-4">Misi</h1>
          <ul className="font-gotham text-primary list-disc">
            <li>
              Menyediakan makanan cepat saji yang lezat dan berkualitas tinggi
            </li>
            <li>
              Mengembangkan jaringan franchise yang solid dan menguntungkan bagi
              mitra bisnis kami
            </li>
            <li>
              Terus berinovasi dalam menu dan layanan untuk memenuhi kebutuhan
              referensi pelanggan
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Vision;
