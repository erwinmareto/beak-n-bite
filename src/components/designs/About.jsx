import { flower, greenFlower, orangeFlower } from "../../assets/images";

const AboutPatterns = () => {
  return (
    <>
      <img
        src={greenFlower}
        alt="green-flower"
        className="absolute -top-10 right-[3.5rem] z-10 max-lg:hidden"
      />
      <img
        src={orangeFlower}
        alt="orange-flower"
        className="absolute top-8 left-[4.75rem] z-10 max-lg:hidden"
      />
      <img
        src={flower}
        alt="flower"
        className="absolute -bottom-5 left-[4.75rem] z-10 max-lg:hidden"
      />
    </>
  );
};

export default AboutPatterns;
