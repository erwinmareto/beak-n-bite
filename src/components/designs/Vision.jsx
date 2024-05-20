import { purpleFlower, ring } from "../../assets/images";

const VisionPatterns = () => {
  return (
    <>
      <img
        src={purpleFlower}
        alt="purple-flower"
        className="absolute -top-[3rem] right-[1rem] z-10 max-lg:hidden "
      />
      <img
        src={ring}
        alt="ring"
        className="absolute -bottom-[6rem] -left-[4.5rem] z-10 max-lg:hidden "
      />
    </>
  );
};

export default VisionPatterns;
