import { navLinks } from "../../constants";

const Menu = ({ toggleNav }) => {
  return (
    <div className="fixed h-screen w-full flex justify-center items-center bg-blue-200  top-0 left-0 z-50">
      {/* <div className="flex justify-center items-center"> */}
      <div className="flex flex-col gap-4 text-center font-bright-retro">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={toggleNav}
            className="text-4xl"
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};
export default Menu;
