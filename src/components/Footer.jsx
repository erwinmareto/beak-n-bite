import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-coral text-primary p-6">
      <h1 className="text-4xl font-bright-retro">B&B</h1>
      <div className="flex items-center gap-2">
        <BsTelephone className="w-8 h-8" />
        <h2 className="text-2xl font-gotham">+62 123 1111 2323</h2>
      </div>
    </footer>
  );
};
export default Footer;
