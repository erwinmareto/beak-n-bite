import { flower, orangeFlower } from "../../assets/images";

const HeroPatterns = () => {
  return (
    <>
      <img
        src={orangeFlower}
        alt="orange-flower"
        className="hero absolute top-[4.5rem] left-[5.75rem] z-10 max-lg:hidden"
      />
      <img
        src={flower}
        alt="flower"
        className="hero absolute top-[7.75rem] left-[27.75rem] z-10 max-lg:hidden"
      />
    </>
  );
};

export default HeroPatterns;
