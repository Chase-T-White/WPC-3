import React from "react";
import PageHeader from "@/app/Components/PageHeader";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const heading = "OELO Permanent LED Lighting";
  const text =
    "White Peak Contracting is proud to announce that we are now Montana's best for premium residential and commercial permanent LED lighting through our new partnership with OELO! OELO's products are proudly manufactured in the Rocky Mountains and are packed full of exclusive features that you can't get through the competition! That's why White Peak Contracting chose them as our product of choice. We are as local as you can get, and we hang high upon our reputation within our community; OELO's products stands along with our mission to provide you with the best service, the best products, to ensure your best experience!";
  const image = "/images/Home/holidayLights2.jpg";
  return (
    <main>
      <PageHeader heading={heading} text={text} image={image} />
      <section>
        <article className="w-screen max-w-[1200px] mx-auto">
          <h3 className="text-primary-color text-center mb-4">
            OELO Lighting Solutions
          </h3>
          <div>
            <p className="mb-16">
              OELO's permanent LED home lighting technology puts endless color
              combinations and breathtaking curb appeal in the palm of your
              hand. Feel free to check out the OELO website to learn more about
              the tech, then contact us when you're ready to get started!
            </p>
            <button>
              <Link href="https://www.oelo.com/" target="_blank">
                OELO Website
              </Link>
            </button>
          </div>
        </article>
      </section>
      <section>OELO Lighting Page Gallery</section>
    </main>
  );
};

export default page;
