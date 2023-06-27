"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.jpg";
import SideModalNav from "./SideModalNav";
import {
  AiFillCaretDown,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineCloseSquare,
} from "react-icons/ai";
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
    <nav className="absolute top-0 left-0 z-10 flex w-screen">
      <div className="flex flex-col w-full hidden sm:block">
        <div className="flex items-center py-[24px] px-4 bg-dark">
          <div className="flex grow gap-12">
            <div tabIndex={0} className="flex items-center gap-4">
              <AiOutlinePhone className="text-primary-color text-xl" />
              (406) 697-7202
            </div>
            <div tabIndex={0} className="flex items-center gap-4">
              <AiOutlineMail className="text-primary-color text-xl" />
              whitepeakohs@gmail.com
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/whitepeakcontracting/"
              target="_blank"
            >
              <AiFillFacebook
                title="White Peak Facebook"
                tabIndex={0}
                className="text-primary-color text-xl"
              />
            </Link>
            <Link
              href="https://www.instagram.com/whitepeakcontracting/"
              target="_blank"
            >
              <AiFillInstagram
                title="White Peak Instagram"
                tabIndex={0}
                className="text-primary-color text-xl"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dillon-white-25a065166/"
              target="_blank"
            >
              <AiFillLinkedin
                title="Dillon White LinkedIn"
                tabIndex={0}
                className="text-primary-color text-xl"
              />
            </Link>
          </div>
        </div>
        <div className="flex py-4 px-4 bg-bg-gradient-dark">
          <div className="nav-logo">
            <Link href={"/"}>
              <Image
                title="Home"
                src={logo}
                alt="White Peak Logo"
                width={75}
                height={75}
              />
            </Link>
          </div>
          <div className="flex justify-center items-center text-white grow">
            <ul className="relative flex justify-between items-center gap-16 p-[8px] nav-menuHidden">
              <li
                tabIndex={0}
                className="flex gap-[8px] cursor-pointer nav-service"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Services
                <AiFillCaretDown className="text-primary-color mt-[4px]" />
              </li>
              <li className="cursor-pointer">
                <Link href={"/projects"}>Portfolio</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/story"}>Our Story</Link>
              </li>
              <li className="text-primary-color cursor-pointer">
                <Link href={"/contact"}>Get In Touch</Link>
              </li>
            </ul>
          </div>
        </div>
        <AnimatePresence>
          {showDropdown && (
            <div className="overflow-hidden bg-transparent">
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.75, type: "linear" }}
                className={`cursor-pointer ${
                  showDropdown ? "flex justify-around w-full py-8 bg-dark" : ""
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
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex items-center w-full sm:hidden p-4">
        <div className="nav-logo grow">
          <Link href={"/"}>
            <Image
              title="Home"
              src={logo}
              alt="White Peak Logo"
              width={75}
              height={75}
            />
          </Link>
        </div>
        <div className="nav-iconContainer">
          {!navOpen ? (
            <IoMdMenu
              tabIndex={0}
              title="Click for Menu"
              className="nav-icon text-primary-color text-6xl cursor-pointer"
              onClick={() => setNavOpen(true)}
            />
          ) : (
            <AiOutlineCloseSquare
              tabIndex={0}
              title="Close"
              className="nav-icon text-primary-color text-6xl cursor-pointer"
              onClick={() => setNavOpen(false)}
            />
          )}
        </div>
      </div>
      {navOpen && (
        <SideModalNav
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
    </nav>
  );
};

export default Navbar;
