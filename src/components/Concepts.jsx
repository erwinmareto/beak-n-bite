import { useRef } from "react";
import { businessConcepts } from "../constants/index.js";
import ConceptPatterns from "./designs/Concept.jsx";
import ConceptCard from "./parts/ConceptCard.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Concepts = () => {
  const conceptRef = useRef(null);
  // const cardRefs = useRef([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".concept-card",
          start: "top center",
        },
      });

      tl.fromTo(
        ".title",
        { opacity: 0, y: -250 },
        { opacity: 1, y: 0, ease: "back.out" }
      );

      tl.fromTo(
        ".concept-card",
        { x: -1500 },
        {
          x: 0,
          stagger: 0.4,
          duration: 1,
          ease: "back.out",
        }
      );

      tl.fromTo(
        ".card-content",
        { opacity: 0, y: 250 },
        { opacity: 1, y: 0, ease: "back.out", stagger: 0.2 }
      );

      tl.fromTo(
        "li",
        { opacity: 0, y: 250 },
        { opacity: 1, y: 0, ease: "back.out", stagger: 0.2 }
      );

      gsap.fromTo(
        ".bottom-flowers",
        { opacity: 0, scaleY: 0 },
        {
          opacity: 1,
          scaleY: 1,
          ease: "back.out",
          stagger: 0.4,
          transformOrigin: "center",
          scrollTrigger: {
            trigger: ".bottom-flowers",
            start: "top center",
          },
        }
      );
    },
    { scope: conceptRef }
  );
  return (
    <section ref={conceptRef} id="concepts" className="relative padding">
      <ConceptPatterns />
      <h1 className="title text-center mb-8">Konsep Bisnis</h1>
      <div className="flex justify-center items-center gap-4 max-lg:flex-col lg:items-start">
        {businessConcepts.map((concept) => (
          <ConceptCard key={concept.title} {...concept} />
        ))}
      </div>
    </section>
  );
};
export default Concepts;
