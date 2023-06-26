import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const CTA = () => {
  return (
    <section className="px-[50px] cta pt-32 pb-12">
      <h2 className="text-primary-color text-center mb-24">
        Let Us Bring Your Vision to Life. Schedule a Consultation Now!
      </h2>
      <article className="grid grid-cols-2">
        <div className="flex h-full w-full items-center justify-center">
          <div>
            <p className="text-primary-color text-4xl mb-4">
              Availble Mon-Sat 8AM - 6PM
            </p>
            <div className="mb-8">
              <p className="mb-[8px]">Give us a call or send us an email</p>
              <div className="w-fit">
                <BsFillTelephoneFill className="inline-block mr-4" /> (406)
                697-7202
              </div>
              <div className="w-fit">
                <IoMdMail className="inline-block mr-4" />{" "}
                whitepeakohs@gmail.com
              </div>
            </div>
            <div className="flex gap-4 mb-16">
              <Link
                href="https://www.facebook.com/whitepeakcontracting/"
                target="_blank"
              >
                <AiFillFacebook
                  title="White Peak Facebook"
                  tabIndex={0}
                  className="text-primary-color text-4xl"
                />
              </Link>
              <Link
                href="https://www.instagram.com/whitepeakcontracting/"
                target="_blank"
              >
                <AiFillInstagram
                  title="White Peak Instagram"
                  tabIndex={0}
                  className="text-primary-color text-4xl"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/dillon-white-25a065166/"
                target="_blank"
              >
                <AiFillLinkedin
                  title="Dillon White LinkedIn"
                  tabIndex={0}
                  className="text-primary-color text-4xl"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px]">
              <div className="relative col-start-1 row-start-1 row-span-2">
                <Image
                  className="object-cover object-center"
                  src={"/images/Home/cta1.jpg"}
                  alt="Woman smiling in front of home"
                  fill
                />
              </div>
              <div className="relative col-start-2 row-start-1">
                <Image
                  className="object-cover object-center"
                  src={"/images/Home/cta2.jpg"}
                  alt="Couple sitting together with dog on a couch"
                  fill
                />
              </div>
              <div className="relative col-start-2 row-start-2">
                <Image
                  className="object-cover object-center"
                  src={"/images/Home/cta3.jpg"}
                  alt="Newly remodeled kitchen"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[600px] bg-bg-gradient-dark py-16 px-8">
          <h4 className="text-primary-color mb-12">
            Send us an inquiry. We would love to hear from you!
          </h4>
          <form className="flex flex-col gap-8">
            <div>
              <input
                className="w-full p-[4px] pl-0 bg-transparent"
                type="text"
                placeholder="Name"
                pattern="[a-zA-Z]{2,} [a-zA-Z]{2,}"
                required
              />
            </div>
            <div className="flex gap-16 text-2xl">
              <label htmlFor="service">Service of Interest:</label>
              <select
                className="w-fit bg-transparent"
                name="service"
                id="service"
              >
                <option value="general">General</option>
                <option value="project">Build/Remodel</option>
                <option value="oelo">OELO Lighting</option>
                <option value="holiday">Holiday Lighting</option>
              </select>
            </div>
            <div>
              <input
                className="w-full p-[4px] pl-0 bg-transparent"
                type="tel"
                pattern="[0-9]{3} [0-9]{3}-[0-9]{4}"
                placeholder="Phone"
                required
              />
              <br />
              <small>Format: xxx xxx-xxxx </small>
            </div>
            <div>
              <input
                className="w-full p-[4px] pl-0 bg-transparent"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <textarea
                className="w-full bg-dark p-4 placeholder:text-2xl"
                name="message"
                id="message"
                rows="10"
                placeholder="Message"
                minLength={"20ch"}
                required
              ></textarea>
            </div>
            <div>
              <button className="btn btn__primary" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default CTA;
