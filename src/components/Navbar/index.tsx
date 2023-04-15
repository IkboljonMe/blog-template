import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import classes from "./styles.module.scss";
import clsx from "clsx";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={clsx(
        classes.paddingX,
        classes.wrapper,
        scrolled ? classes.scrolled : classes.unscrolled
      )}
    >
      <div className={classes.navContainer}>
        <Link
          to="/"
          className={classes.rightNavContainer}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img className={classes.favIcon} src={logo} alt="logo" />
          <p className={classes.title}>
            IkboljonMe &nbsp;
            <span className={classes.description}>| &nbsp; Portfolio</span>
          </p>
        </Link>

        <ul className={classes.largeMenuContainer}>
          {navLinks.map((nav) => (
            <li
              className={clsx(
                classes.menuItems,
                active == nav.title ? classes.activeMenu : classes.deactiveMenu
              )}
              key={nav.id}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className={classes.mobileMenuContainer}>
          <img
            className={classes.menuIcon}
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={clsx(classes.mobileMenuItems, {
              [classes.activeMobileMenu]: toggle,
              [classes.deactiveMobileMenu]: !toggle,
            })}
          >
            <ul className={classes.container}>
              {navLinks.map((nav) => (
                <li
                  className={clsx(
                    classes.containerItem,
                    active == nav.title
                      ? classes.activeMenu
                      : classes.deactiveMenu
                  )}
                  key={nav.id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
