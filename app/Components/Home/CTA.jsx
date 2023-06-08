import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const CTA = () => {
  return (
    <section>
      <h2>Let Us Bring Your Vision to Life. Schedule a Consultation Now!</h2>
      <article className="flex">
        <div>
          <p>Availble Mon-Sat 8AM - 6PM</p>
          <div>
            <p>Give us a call or send us an email</p>
            <div>
              <BsFillTelephoneFill /> (406) 697-7202
            </div>
            <div>
              <IoMdMail /> whitepeakohs@gmail.com
            </div>
          </div>
        </div>
        <div>
          <h4>Send us an inquiry. We would love to hear from you!</h4>
          <form action="">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
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
