import { businessConcepts } from "../constants/index.js";
import ConceptPatterns from "./designs/Concept.jsx";
import ConceptCard from "./parts/ConceptCard.jsx";

const Concepts = () => {
  return (
    <section className="relative padding">
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
