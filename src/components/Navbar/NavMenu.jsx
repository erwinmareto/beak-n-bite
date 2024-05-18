import { navLinks } from "../../constants";

const NavMenu = ({ toggleNav }) => {
  return (
    <div className="flex justify-center items-center bg-coral py-4">
      <div className="flex gap-8 text-center font-bright-retro max-lg:flex-col">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={toggleNav}
            className="text-4xl text-olive"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
export default NavMenu;
