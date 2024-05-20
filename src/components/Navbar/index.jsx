import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";
import NavMenu from "./NavMenu";
import { logo } from "../../assets/images";

const Navbar = () => {
  const navRef = useRef(null);
  const tag = useRef(null);
  const menuRef = useRef(null);
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  useGSAP(
    () => {
      gsap.registerPlugin(Flip);
      const menuElement = menuRef.current;
      const menuState = Flip.getState(
        "#nav-menu, #header, #nav-links, .menu-item, #hero"
      );
      menuElement.style.display = openNav ? "block" : "none";

      Flip.from(menuState, {
        duration: 1,
        ease: "power4.out",
        targets: "#nav-menu, #header, #nav-links, #hero",
        absoluteOnLeave: true,
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            { scaleY: 0 },
            {
              scaleY: 1,
              transformOrigin: "top",
              ease: "sine.out",
              stagger: 0.2,
            }
          ),
        onLeave: (elements) =>
          gsap.to(elements, {
            scaleY: 0,
            transformOrigin: "bottom",
            ease: "sine.out",
            stagger: 0.2,
          }),
      });
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
            <h3 className="text-xl mb-1">Menu</h3>
          </button>
          <div className="flex flex-1 justify-center">
            <img src={logo} alt="beak and bite logo" width={100} height={100} />
          </div>
        </nav>
      </header>
      <div ref={menuRef}>{openNav && <NavMenu toggleNav={toggleNav} />}</div>
    </>
  );
};
export default Navbar;
