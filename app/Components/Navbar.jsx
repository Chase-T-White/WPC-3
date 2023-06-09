"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.jpg";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const sideNavVariant = {
    initial: {
      x: "100%",
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
        type: "linear",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.5,
        type: "linear",
        when: "afterChildren",
      },
    },
  };

  const childVariants = {
    initial: {
      y: "10%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "linear",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "linear",
      },
    },
  };

  return (
    <nav className="absolute top-0 left-0 bg-transparent z-10 flex mx-4 py-[8px] w-screen">
      <div className="nav-logo">
        <Link href={"/"}>
          <Image src={logo} alt="White Peak Logo" width={75} height={75} />
        </Link>
      </div>
      <div className="flex justify-center items-center grow">
        <ul className="relative flex justify-between items-center gap-16 p-[8px] nav-menuHidden">
          <li
            className="text-dark cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Services
            <AiFillCaretDown />
            <div
              className={`text-dark cursor-pointer ${
                showDropdown
                  ? "absolute top-full left-0 flex justify-between w-full py-4 px-8 mt-[8px]"
                  : "hidden"
              }`}
              onClick={() => setShowDropdown(false)}
            >
              <div>
                <Link href={"services/contracting"}>General Contracting</Link>
              </div>
              <div>
                <Link href={"services/builds"}>Build / Upgrade</Link>
              </div>
              <div>
                <Link href={"services/oelo"}>OELO Lighting Solutions</Link>
              </div>
              <div>
                <Link href={"services/lights"}>Holiday Lighting</Link>
              </div>
            </div>
          </li>
          <li className="text-dark cursor-pointer">
            <Link href={"/projects"}>Portfolio</Link>
          </li>
          <li className="text-dark cursor-pointer">
            <Link href={"/story"}>Our Story</Link>
          </li>
          <li className="text-primary-color cursor-pointer">
            <Link href={"/contact"}>Get In Touch</Link>
          </li>
        </ul>
        <AnimatePresence>
          {navOpen && (
            <motion.ul
              variants={sideNavVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="nav-links_container nav-menuCollapse"
            >
              <motion.li variants={childVariants} className="nav-link">
                <Link href={"/beers"}>Our Beers</Link>
              </motion.li>
              <motion.li variants={childVariants} className="nav-link">
                <Link href={"/events"}>Events</Link>
              </motion.li>
              <motion.li
                variants={childVariants}
                className="nav-link"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                LPB
                <AiFillCaretDown />
                <div
                  className={`nav-link ${
                    showDropdown
                      ? "absolute top-full left-0 flex justify-between w-full py-4 px-8 mt-[8px]"
                      : "hidden"
                  }`}
                  onClick={() => setShowDropdown(false)}
                >
                  <div>
                    <Link href={"lbp/story"}>Our Story</Link>
                  </div>
                  <div>
                    <Link href={"lbp/team"}>Meet the Crew</Link>
                  </div>
                  <div>
                    <Link href={"lbp/faq"}>FAQ</Link>
                  </div>
                </div>
              </motion.li>
              <motion.li variants={childVariants} className="nav-link">
                <Link href={"/contact"}>Get In Touch</Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="nav-iconContainer">
          <IoMdMenu className="nav-icon" onClick={() => setNavOpen(true)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
