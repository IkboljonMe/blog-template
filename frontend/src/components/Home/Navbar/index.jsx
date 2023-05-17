import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import { motion } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const navbarLinks = ["Home", "Blog", "Portfolio", "Projects"];

const Navbar = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [menu, setMenu] = useState(false);
  const [auth, setAuth] = useState(bool);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <>
      <nav className={classes.navbar}>
        <Link to="/">
          <motion.p whileHover={{ scale: 1.05 }}>
            Ikboljon<span>Me</span>
          </motion.p>
        </Link>
        <ul>
          {navbarLinks.map((link, index) => (
            <motion.li key={index} whileHover={{ scale: 1.05 }}>
              <Link
                to={link !== "Login" ? "/" + link.toLowerCase() : "/auth/login"}
              >
                {link}
              </Link>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.05 }}>
            <Link onClick={auth && handleLogout} to={!auth && "/auth/login"}>
              {auth ? "Log out" : "Login"}
            </Link>
          </motion.li>
        </ul>
        <menu>
          {menu ? (
            <i
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <HiMenu size="30" />
            </i>
          ) : (
            <i>
              <IoClose
                size="30"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            </i>
          )}
        </menu>
        {!menu && (
          <section className={classes.menuSection}>
            <div></div>
            {navbarLinks.map((link, index) => (
              <p>
                <Link to={"/" + link.toLowerCase()}>{link}</Link>
              </p>
            ))}
          </section>
        )}
      </nav>
    </>
  );
};

export default Navbar;
