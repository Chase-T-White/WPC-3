import React from "react";
import Link from "next/link";
import {
  AiFillCaretDown,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineCloseSquare,
} from "react-icons/ai";

const SideModalNav = ({ setShowDropdown, showDropdown, setNavOpen }) => {
  return (
    <div>
      <div
        className="inline-block absolute top-4 right-4 text-primary-color text-4xl z-10"
        onClick={() => setNavOpen(false)}
      >
        <AiOutlineCloseSquare />
      </div>
      <ul className="relative flex flex-col gap-8 py-8 nav-menuHidden">
        <li
          tabIndex={0}
          className="flex items-center gap-[2px] text-dark cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Services
          <AiFillCaretDown className="text-primary-color" />
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
      <div className="flex flex-col">
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
  );
};

export default SideModalNav;
