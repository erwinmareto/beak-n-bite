import { BsTelephone } from "react-icons/bs";
import { logo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="bg-coral text-primary p-6">
      <div className="flex justify-between items-center ">
        {/* <h1 className="text-4xl font-bright-retro">B&B</h1> */}
        <img src={logo} width={100} height={100} />
        <div className="flex items-center gap-2">
          <BsTelephone className="w-6 h-6 lg:w-8 lg:h-8" />
          <h2 className="text-lg font-gotham lg:text-2xl">+62 123 1111 2323</h2>
        </div>
      </div>

      <p className="text-sm font-gotham mt-4 lg:text-lg">
        2024 &copy; Beak & Bite, All Rights Reserved.
      </p>
    </footer>
  );
};
export default Footer;
