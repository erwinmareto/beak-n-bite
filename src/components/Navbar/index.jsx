import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <header className="padding-x py-2 w-full bg-coral">
      <nav className="flex justify-between items-center max-container">
        <button
          onClick={toggleNav}
          className="flex justify-center items-center bg-primary text-coral px-2 py-1 gap-2 rounded-full transition hover:scale-105 active:scale-90"
        >
          <GiHamburgerMenu
            className={`w-6 h-6 transition ${openNav && "rotate-90"}`}
          />
          <h3 className="text-xl mb-1">Menu</h3>
        </button>
        <div className="flex flex-1 justify-center">
          <h2 className="text-4xl font-bright-retro text-purple">
            B<span className="text-olive">&amp;</span>B
          </h2>
        </div>
      </nav>
      {openNav && <NavMenu toggleNav={toggleNav} />}
    </header>
  );
};
export default Navbar;
