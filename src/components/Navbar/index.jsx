import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "./NavMenu";
import { logo } from "../../assets/images";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { Flip } from "gsap/all";

const Navbar = () => {
  const navRef = useRef(null);
  const tag = useRef(null);
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  useGSAP(
    () => {
      gsap.fromTo(
        "#nav-menu",
        { scaleY: 0 },
        { scaleY: 1, duration: 1, ease: "bounce.out", transformOrigin: "top" }
      );
    },
    { dependencies: [openNav] }
  );
  return (
    <>
      <header
        ref={navRef}
        id="header"
        className="padding-x py-2 w-full bg-coral"
      >
        <nav
          ref={tag}
          id="tag"
          className="flex justify-between items-center max-container"
        >
          <button
            onClick={toggleNav}
            className="flex justify-center items-center bg-primary text-coral px-2 py-1 gap-2 rounded-full transition hover:scale-105 active:scale-90"
          >
            <GiHamburgerMenu
              className={`w-6 h-6 transition ${openNav && "rotate-90"}`}
            />
            <h4 className="text-xl">Menu</h4>
          </button>
          <div className="flex flex-1 justify-center">
            <img src={logo} alt="beak and bite logo" width={100} height={100} />
          </div>
        </nav>
      </header>
      {openNav && <NavMenu toggleNav={toggleNav} />}
    </>
  );
};
export default Navbar;
