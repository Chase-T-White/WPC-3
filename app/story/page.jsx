import React from "react";
import Image from "next/image";

const Story = () => {
  return (
    <main>
      <article className="w-screen h-max min-h-[800px] grid grid-cols-[repeat(7,_1fr)] grid-rows-[200px_repeat(5,_1fr)_50px] md:grid-rows-[400px_repeat(5,_1fr)_100px]">
        <div className="relative col-span-full row-start-1 row-span-6">
          <Image
            src={"/images/About/snowRemoval.jpg"}
            alt="Snow removal"
            fill
            className="object-cover object-center -z-10"
          />
        </div>
        <div className="col-span-full md:col-start-2 md:col-span-6 lg:col-start-4 lg:col-span-4 row-start-2 row-span-5 bg-bg-gradient-dark py-16 px-4 md:p-16">
          <h3 className="text-primary-color mb-12">Our Humble Origins</h3>
          <p>
            Founded with a vision to leverage expertise and deliver exceptional
            services, White Peak Contracting emerged as a testament to ambition
            and passion. Our founder, driven by a desire to make the most of his
            experiences in the energy sector while pursuing higher education,
            embarked on a journey to create something truly remarkable.
            <br />
            <br /> In the early days, White Peak Contracting humbly offered
            services such as lawn care and snow removal. However, fueled by a
            commitment to excellence and a determination to exceed expectations,
            the business quickly evolved. Guided by a relentless pursuit of
            craftsmanship and a dedication to client satisfaction, White Peak
            Contracting expanded its repertoire, specializing in general
            contracting, building, and remodeling projects.
            <br />
            <br /> Today, with over half a decade of unwavering dedication,
            White Peak Contracting has blossomed into a full-steam contracting
            operation renowned for its exceptional quality and attention to
            detail. From transforming residential spaces to embarking on
            ambitious commercial ventures, we have honed our skills and
            expertise to consistently deliver outstanding results.
            <br />
            <br /> At White Peak Contracting, we take immense pride in our
            journey and the relationships we have built along the way. Our
            success is fueled by our commitment to integrity, open
            communication, and a relentless pursuit of excellence. As we
            continue to grow, we eagerly look forward to the opportunity to meet
            you, showcase our capabilities, and provide you with the finest
            service in the industry for years to come.
          </p>
        </div>
      </article>
      <article className="w-screen h-max min-h-[800px] grid grid-cols-[minmax(10px,_50px)_minmax(250px,_1fr)_minmax(10px,_50px)] md:grid-cols-[50px_repeat(2,_minmax(130px,_1fr))_repeat(5,_minmax(80px,_1fr))_50px] xl:grid-cols-[minmax(50px,_150px)_repeat(7,_minmax(165px,_1fr))_minmax(50px,_150px)] grid-rows-[100px_repeat(5,_1fr)_100px]">
        <div className="col-start-2 md:col-start-4 md:col-span-5 xl:col-span-3 row-start-3 row-span-5 md:row-start-2 md:row-span-5">
          <h3 className="text-primary-color mb-12">
            Meet the Man, The Myth, The Founder
          </h3>
          <p>
            Dillon White, the founder of White Peak Contracting, is a true
            Montanan with deep roots in the majestic landscapes of the Big Sky
            state. Growing up amidst the hills and creeks, Dillon developed a
            strong work ethic and a passion for enterprise from an early age.
            <br />
            <br />
            After graduating from Billings West High School, Dillon pursued his
            interest in both the trades and business. He expanded his knowledge
            and skills in the construction industry while simultaneously
            studying business administration with a focus in marketing at
            Montana State University Billings. During his time at the
            university, Dillon's dedication and achievements garnered
            recognition, earning him several local and national awards.
            <br />
            <br />
            Following his graduation in 2020, Dillon embarked on a journey to
            further enhance White Peak Contracting's capabilities. Immersing
            himself in the realms of marketing, creativity, and development, he
            gained valuable insights to augment the company's offerings.
            <br />
            <br /> Today, Dillon proudly leads White Peak Contracting as its
            helm, dedicating himself full-time to ensuring the highest standards
            of service for our valued clients and the community that supports
            us. Guided by his unwavering commitment to excellence, Dillon
            remains at the forefront of our company, driving its growth and
            success.
          </p>
        </div>
        <div className="mx-auto md:mx-0 col-start-2 md:col-start-2 md:col-span-2 row-start-1 row-span-2 md:row-start-2 md:row-span-5 xl:row-start-2 xl:row-span-3 pr-12">
          <div className="sticky top-0 w-[300px] md:w-full h-[300px] md:h-[66%] mb-12 md:mb-0">
            <Image
              src={"/images/About/owner.jpg"}
              alt="Owner Dillon White"
              fill
              className="object-contain object-top"
            />
          </div>
        </div>
        <div className="hidden xl:block col-start-7 col-span-2 row-start-4 row-span-3 pl-12">
          <div className="sticky top-0 w-full h-[66%]">
            <Image
              src={"/images/About/owner2.jpg"}
              alt="Owner Dillon White"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </article>
    </main>
  );
};

export default Story;
