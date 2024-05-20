import { navLinks } from "../../constants";

const NavMenu = ({ toggleNav }) => {
  return (
    <div
      id="nav-menu"
      className="flex justify-center items-center bg-coral py-4"
    >
      <div
        id="nav-links"
        className="flex gap-8 text-center font-bright-retro max-lg:flex-col"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={toggleNav}
            className="text-3xl text-olive transition-transform hover:scale-110 menu-item"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
export default NavMenu;
