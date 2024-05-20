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
        alt="flower"
        className="absolute top-[1rem] right-[5rem] z-10 max-lg:hidden "
      />
      <img
        src={orangeFlower}
        alt="orange-flower"
        className="bottom-flowers absolute -bottom-[3rem] left-[2.5rem] z-10 max-lg:hidden"
      />
      <img
        src={greenFlower}
        alt="green-flower"
        className="bottom-flowers absolute bottom-[2rem] right-[32rem] z-10 max-lg:hidden"
      />
      <img
        src={purpleFlower}
        className="bottom-flowers absolute bottom-[1rem] right-0 z-10 max-lg:hidden"
      />
    </>
  );
};

export default ConceptPatterns;
