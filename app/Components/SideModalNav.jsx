import React from "react";
import Link from "next/link";
import {
  AiFillCaretDown,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

const SideModalNav = ({ setShowDropdown, showDropdown }) => {
  return (
    <div className="absolute top-full right-0 bg-dark px-4 pb-8">
      <ul className="relative flex flex-col items-start gap-8 py-8">
        <li
          tabIndex={0}
          className="flex flex-col items-start gap-[2px] text-white cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="flex gap-[8px] nav-service">
            Services
            <AiFillCaretDown className="text-primary-color mt-[4px]" />
          </div>
          <div
            className={`text-white cursor-pointer ${
              showDropdown
                ? "flex flex-col justify-between gap-[4px] w-full py-[4px] px-4 mt-[8px]"
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
        <li className="text-white cursor-pointer">
          <Link href={"/projects"}>Portfolio</Link>
        </li>
        <li className="text-white cursor-pointer">
          <Link href={"/story"}>Our Story</Link>
        </li>
        <li className="text-primary-color cursor-pointer">
          <Link href={"/contact"}>Get In Touch</Link>
        </li>
      </ul>
      <div className="flex flex-col gap-[4px] mb-4">
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
            className="text-primary-color text-3xl"
          />
        </Link>
        <Link
          href="https://www.instagram.com/whitepeakcontracting/"
          target="_blank"
        >
          <AiFillInstagram
            title="White Peak Instagram"
            tabIndex={0}
            className="text-primary-color text-3xl"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dillon-white-25a065166/"
          target="_blank"
        >
          <AiFillLinkedin
            title="Dillon White LinkedIn"
            tabIndex={0}
            className="text-primary-color text-3xl"
          />
        </Link>
      </div>
    </div>
  );
};

export default SideModalNav;
