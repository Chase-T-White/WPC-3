import React from "react";
import PageHeader from "@/app/Components/PageHeader";

const page = () => {
  const heading = "Building & Renovations";
  const text =
    "Welcome to our Building and Renovation Services page, where craftsmanship and innovation come together. Whether you're looking to build your dream home from the ground up or transform your existing space into something extraordinary, our team of skilled professionals is here to bring your vision to life. With a meticulous attention to detail and a commitment to exceeding expectations, we strive to deliver exceptional results that reflect your unique style and cater to your specific needs.";
  const image = "/images/Home/renovation2.jpg";
  return (
    <main>
      <PageHeader heading={heading} text={text} image={image} />
    </main>
  );
};

export default page;
