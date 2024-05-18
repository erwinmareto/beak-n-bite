import About from "./components/About.jsx";
import Concepts from "./components/Concepts.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar/index.jsx";
import Showcase from "./components/Showcase.jsx";
import Vision from "./components/Vision.jsx";

function App() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Concepts />
      <Showcase />
      <Footer />
    </main>
  );
}

export default App;
