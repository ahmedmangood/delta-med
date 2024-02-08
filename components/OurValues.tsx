"use client";

import { useTranslations } from "next-intl";

function OurValues() {
  const t = useTranslations("OurValues");
  return (
    <section className="px-4 md:px-8 lg:px-16 bg-blue-100 py-20 my-20">
      <h4 className="pb-10 text-2xl">{t("ourvalues-title")}</h4>
      <div data-aos="zoom-in-up" className="border-s-4 border-gray-800 ">
        <p className="ps-8 text-start">{t("ourvalues-paragraph")}</p>
      </div>
    </section>
  );
}

export default OurValues;
