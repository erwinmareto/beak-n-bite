import { heroImg, mobileImg, shortChecker } from "../assets/images";
import AboutPatterns from "./designs/About";
import HeroPatterns from "./designs/Hero";
const Hero = () => {
  return (
    <section className="relative">
      <img src={shortChecker} className="absolute top-0" />
      <div className="flex justify-center items-center padding max-lg:flex-col">
        <div className="lg:w-1/2 max-lg:text-center">
          <h1 className="text-2xl font-bright-retro text-olive mb-4 lg:text-4xl relative z-20">
            Beak & Bite
          </h1>
          <h3 className="text-4xl font-bright-retro text-purple lg:text-8xl relative z-20">
            Take a Bite, Take a Taste.
          </h3>
          <HeroPatterns />
        </div>

        {/* <img
          src={mobileImg}
          width={1000}
          height={400}
          className="object-cover w-full lg:w-1/2 lg:hidden"
        /> */}
        {/* <img src={heroImg} className="lg:w-1/2 max-lg:hidden" /> */}
        <img src={heroImg} className="lg:w-1/2" />
      </div>
      <img src={shortChecker} className="absolute bottom-0" />
    </section>
  );
};

export default Hero;
