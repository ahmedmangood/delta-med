import React from "react";

function PagesBanner({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) {
  return (
    <section className="px-4 md:px-8 lg:px-16 my-20">
      <div
        data-aos="fade-down"
        className="flex flex-col items-center justify-center gap-6"
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 text-center">
          {title}
        </h2>
        <p className="text-center text-gray-500 px-5">{paragraph}</p>
      </div>
      {/* <hr className="border-t-4 border-gray-800 mt-20" /> */}
    </section>
  );
}

export default PagesBanner;
