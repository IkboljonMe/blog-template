import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { logo } from "../../assets";
import clsx from "clsx";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";

import classes from "./styles.module.scss";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
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
            Ikboljon<p>Me</p> &nbsp;
            <span className={classes.description}>|&nbsp;Portfolio</span>
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
          <button
            className={classes.menuIcon}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <FaTimes className={classes.icons} size={32} />
            ) : (
              <HiMenuAlt1 className={classes.icons} size={32} />
            )}
          </button>

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
                  <a className={classes.links} href={`#${nav.id}`}>
                    {nav.title}
                  </a>
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
