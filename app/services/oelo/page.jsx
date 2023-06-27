import React from "react";
import PageHeader from "@/app/Components/PageHeader";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const heading = "OELO Permanent LED Lighting";
  const text =
    "OELO's permanent LED home lighting technology puts endless color combinations and breathtaking curb appeal in the palm of your hand. Feel free to check out the OELO website to learn more about the tech, then contact us when you're ready to get started!";
  const image = "/images/Home/holidayLights2.jpg";
  return (
    <main>
      <PageHeader heading={heading} text={text} image={image} />
      <section className="mt-48 w-screen grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-[1fr,_2fr] grid-rows-[1fr_400px] sm:grid-rows-3 xl:grid-rows-1 gap-[50px] 2xl:gap-[150px] px-8">
        <article className="row-start-1">
          <h3 className="text-primary-color mb-4">OELO Lighting Solutions</h3>
          <div>
            <p className="mb-16">
              White Peak Contracting is proud to announce that we are now
              Montana's best for premium residential and commercial permanent
              LED lighting through our new partnership with OELO! OELO's
              products are proudly manufactured in the Rocky Mountains and are
              packed full of exclusive features that you can't get through the
              competition! That's why White Peak Contracting chose them as our
              product of choice. We are as local as you can get, and we hang
              high upon our reputation within our community; OELO's products
              stands along with our mission to provide you with the best
              service, the best products, to ensure your best experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-16">
              <button className="btn btn__primary">
                <Link href="https://www.oelo.com/" target="_blank">
                  Contact Now
                </Link>
              </button>
              <button className="btn">
                <Link href="https://www.oelo.com/" target="_blank">
                  OELO Website
                </Link>
              </button>
            </div>
          </div>
        </article>
        <article className="row-start-2 sm:row-span-2 xl:row-start-1 xl:row-span-1">
          <div className="relative h-full">
            <Image
              src={"/images/Services/OELO/oelo1.jpg"}
              alt="OELO Lights on a building"
              fill
              className="object-center object-cover"
            />
          </div>
        </article>
      </section>
      {/* <section>OELO Lighting Page Gallery</section> */}
    </main>
  );
};

export default page;
