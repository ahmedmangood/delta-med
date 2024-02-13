import { AboutSlide, HeaderSection, PagesBanner } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";

function AboutPage() {
  const t = useTranslations("AboutUs");
  return (
    <main>
      <HeaderSection title={t("title")} />
      <PagesBanner title={t("bannerTitle")} paragraph={t("bannerParagraph")} />
      <AboutSlide
        title={t("slideOneTitle")}
        paragraph={t("slideOneParagraph")}
        img="/webimages/mission.jpg"
        reverse
      />
      <AboutSlide
        title={t("slideTwoTitle")}
        paragraph={t("slideTwoParagraph")}
        img="/webimages/approach.jpg"
        reverse={false}
      />
    </main>
  );
}

export default AboutPage;
