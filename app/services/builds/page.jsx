import React from "react";
import PageHeader from "@/app/Components/PageHeader";
import { GiPolarStar } from "react-icons/gi";

const page = () => {
  const heading = "Building & Renovations";
  const text =
    "Welcome to our Building and Renovation Services page, where craftsmanship and innovation come together. Whether you're looking to build your dream home from the ground up or transform your existing space into something extraordinary, our team of skilled professionals is here to bring your vision to life. With a meticulous attention to detail and a commitment to exceeding expectations, we strive to deliver exceptional results that reflect your unique style and cater to your specific needs.";
  const image = "/images/Home/renovation2.jpg";
  return (
    <main>
      <PageHeader heading={heading} text={text} image={image} />
      <section>
        <article className="w-screen max-w-[1400px] mx-auto">
          <div>
            <h2 className="text-center mb-4 text-primary-color mb-12">
              Well, What Do You Need Done?
            </h2>
            <p className="max-w-[100ch] mx-auto mb-40 px-4">
              That's our simple pitch to anyone that asks what it is that we do.
              We're serious, if you asked us to manage the construction of a
              space station on the moon, we'd figure out exactly how to get it
              done. However, our services are more often requested for projects
              that are a little closer to home. From residential remodels to
              commercial gravel work, and everything in between, there's rarely
              a task we can't handle!
            </p>
          </div>
          <div className="flex justify-center items-center mb-40">
            <GiPolarStar className="text-primary-color text-4xl" />
          </div>
          <div className="mb-20">
            <h3 className="text-primary-color mb-12">We Have Experience In:</h3>
          </div>
        </article>
      </section>
    </main>
  );
};

export default page;
