import React from "react";
import PageHeader from "../Components/PageHeader";
import CTA from "../Components/Home/CTA";

const page = () => {
  const heading = "Contact Us for Expert Advice";
  const text =
    "We'd love to hear from you! Whether you have a question, need a quote, or want to start a new project, our team is ready to assist you. Contact us today and let's make your dream project a reality.";
  const image = "/images/Contact/contactHeader.jpg";
  return (
    <main>
      <PageHeader heading={heading} text={text} image={image} />
      <CTA />
    </main>
  );
};

export default page;
