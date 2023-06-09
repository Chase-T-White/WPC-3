import React from "react";
import PageHeader from "@/app/Components/PageHeader";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const heading = "Holiday Lighting";
  const text =
    "Welcome to our Holiday Lighting Services page, where we bring the magic of the holiday season to life through captivating light displays. Our experienced team specializes in designing and installing breathtaking holiday lighting for both residential and commercial properties. From elegant and classic designs to vibrant and whimsical displays, we create unforgettable experiences that spread joy and festivity during the most wonderful time of the year.";
  const image = "/images/Home/holidayLights3.jpg";
  return (
    <main>
      <PageHeader heading={heading} text={text} image={image} />
      <section>
        <article className="w-screen max-w-[1200px] mx-auto">
          <h3 className="text-center mb-4">Let's Lighten Up Your Holidays!</h3>
          <div>
            <p className="mb-16">
              It's a little-known fact that White Peak Contracting was founded
              on its holiday lighting services. Now, half a decade later, we are
              one of Yellowstone County's premiere holiday lighting providers,
              offering decoration solutions to fit every need!
            </p>
            <p>
              Because no two homes, visions, or budgets are alike, our process
              starts with getting to know your needs and ends with a service
              tailored exactly to that. Scroll down to learn a little more about
              our offerings, then feel free to contact us for a free service
              quote!
            </p>
            <div>
              <h5>Holiday Lighting Options</h5>
              <ul>
                <li>
                  <div className="relative">
                    <Image />
                  </div>
                  <div>
                    <h6 className="mb-4">Seasonal</h6>
                    <p className="mb-8">
                      Retire the ladder by taking advantage of our traditional
                      Christmas light installation and removal services.
                      Availability is limited so be sure to reserve your spot
                      early!
                    </p>
                    <button className="btn btn__primary">
                      <Link href="/contact">Contact Us!</Link>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="relative">
                    <Image />
                  </div>
                  <div>
                    <h6 className="mb-4">Permanent</h6>
                    <p className="mb-8">
                      We are proud to be Montana's only OELO permanent holiday
                      lighting distributor and preferred installer.
                    </p>
                    <button className="btn btn__primary">
                      <Link href="/services/oelo">Learn More</Link>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="relative">
                    <Image />
                  </div>
                  <div>
                    <h6 className="mb-4">Arbor</h6>
                    <p className="mb-8">
                      Nobody decorates trees like we do, and no Christmas
                      wonderscape is complete without them. This seasonal
                      service will bring a holiday magic like nothing else can.
                    </p>
                    <button className="btn btn__primary">
                      <Link href="/contact">Contact Us!</Link>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="relative">
                    <Image />
                  </div>
                  <div>
                    <h6 className="mb-4">Custom</h6>
                    <p className="mb-8">
                      Do you have a unique vision that you need help to make a
                      reality? Well, we are no stranger to unique and bright
                      ideas. Feel free to consider collaborating with us!
                    </p>
                    <button className="btn btn__primary">
                      <Link href="/contact">Contact Us!</Link>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <section>Holiday Lighting Page Gallery</section>
    </main>
  );
};

export default page;
