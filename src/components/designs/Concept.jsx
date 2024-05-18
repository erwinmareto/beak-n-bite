import {
  flower,
  greenFlower,
  orangeFlower,
  purpleFlower,
} from "../../assets/images";

const ConceptPatterns = () => {
  return (
    <>
      <img
        src={flower}
        className="absolute top-[1rem] right-[5rem] z-10 max-lg:hidden "
      />
      <img
        src={orangeFlower}
        className="absolute -bottom-[3rem] left-[2.5rem] z-10 max-lg:hidden "
      />
      <img
        src={greenFlower}
        className="absolute bottom-[2rem] right-[32rem] z-10 max-lg:hidden "
      />
      <img
        src={purpleFlower}
        className="absolute bottom-[1rem] right-0 z-10 max-lg:hidden "
      />
    </>
  );
};

export default ConceptPatterns;
