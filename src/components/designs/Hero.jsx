import { flower, orangeFlower } from "../../assets/images";

const HeroPatterns = () => {
  return (
    <>
      <img
        src={orangeFlower}
        className="absolute top-[4.5rem] left-[5.75rem] z-10 max-lg:hidden"
      />
      <img
        src={flower}
        className="absolute top-[7.75rem] left-[27.75rem] z-10 max-lg:hidden"
      />
    </>
  );
};

export default HeroPatterns;
