import Image from "next/image";
import React from "react";

function AboutSlide({
  title,
  paragraph,
  reverse,
  img,
}: {
  title: string;
  paragraph: string;
  reverse: boolean;
  img: string;
}) {
  return (
    <section
      className={`px-4 md:px-8 lg:px-16 flex flex-col gap-16 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between my-10`}
    >
      <div data-aos="fade-right" className="flex flex-col gap-4 items-start">
        <h4 className="text-3xl font-semibold">{title}</h4>
        <div>
          <p>{paragraph}</p>
        </div>
      </div>
      <Image
        data-aos="fade-left"
        src={img}
        alt={"Our Services"}
        width={400}
        height={400}
        className="rounded-lg"
      />
    </section>
  );
}

export default AboutSlide;
