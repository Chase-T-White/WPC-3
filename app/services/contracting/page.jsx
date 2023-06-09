import React from "react";
import PageHeader from "@/app/Components/PageHeader";
import Link from "next/link";

const page = () => {
  const heading = "General Contracting";
  const text =
    "Welcome to our General Contracting Services page, where seamless project management and reliable expertise converge. As your trusted partner, we oversee the entire construction process, from initial planning and budgeting to the final touches. With a focus on open communication, attention to detail, and a network of skilled subcontractors, we ensure that your project is delivered on time, within budget, and to the highest standards of quality.";
  const image = "/images/Projects/projectPics/project2/img2.jpg";
  return (
    <main>
      <PageHeader heading={heading} text={text} image={image} />
      <section>
        <article className="w-screen max-w-[1200px] mx-auto">
          <h3 className="text-center mb-4">Well, What Do You Need Done?</h3>
          <div>
            <p className="mb-16">
              That's our simple pitch to anyone that asks what it is that we do.
              We're serious, if you asked us to manage the construction of a
              space station on the moon, we'd figure out exactly how to get it
              done. However, our services are more often requested for projects
              that are a little closer to home. From residential remodels to
              commercial gravel work, and everything in between, there's rarely
              a task we can't handle!
            </p>
            <div>
              <h5>We Have Experience In:</h5>
              <ul>
                <li>Siding</li>
                <li>Stone</li>
                <li>Windows</li>
                <li>Framing/Sheeting</li>
                <li>Deck Construction/Replacement</li>
                <li>Paint</li>
                <li>Bathroom, Kitchen, Bar</li>
                <li>Flooring</li>
                <li>Trim/Fine Carpentry</li>
                <li>Log Carpentry</li>
              </ul>
            </div>
            <div>
              <p>Have an odd request? We love to hear about those too!</p>
              <button className="btn btn__primary">
                <Link href="/contact">Get Started!</Link>
              </button>
            </div>
          </div>
        </article>
      </section>
      <section>Service Page Gallery</section>
    </main>
  );
};

export default page;
