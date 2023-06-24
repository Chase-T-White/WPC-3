import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const CTA = () => {
  return (
    <section className="px-[50px] cta pt-8 pb-12">
      <h2 className="text-primary-color text-center mb-16">
        Let Us Bring Your Vision to Life. Schedule a Consultation Now!
      </h2>
      <article className="grid grid-cols-2">
        <div className="flex flex-col h-full w-full items-center justify-center text-center">
          <p>Availble Mon-Sat 8AM - 6PM</p>
          <div>
            <p>Give us a call or send us an email</p>
            <div className="w-fit">
              <BsFillTelephoneFill /> (406) 697-7202
            </div>
            <div className="w-fit">
              <IoMdMail /> whitepeakohs@gmail.com
            </div>
          </div>
        </div>
        <div className="max-w-[600px] bg-bg-gradient-dark py-16 px-8">
          <h4 className="text-primary-color mb-12">
            Send us an inquiry. We would love to hear from you!
          </h4>
          <form className="flex flex-col gap-4">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="service">Service of Interest</label>
              <select name="service" id="service">
                <option value="general">General</option>
                <option value="project">Build/Remodel</option>
                <option value="oelo">OELO Lighting</option>
                <option value="holiday">Holiday Lighting</option>
              </select>
            </div>
            <div>
              <input type="phone" placeholder="Phone" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default CTA;
