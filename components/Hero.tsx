"use client";
import { useTranslations } from "next-intl";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import { CustomeLink } from ".";

const Hero = () => {
  const t = useTranslations("Hompage");
  const router = useRouter();
  const routeToAboutus = () => {
    router.push("/about");
  };

  return (
    <section className="h-screen relative">
      <div className="absolute w-full h-full bg-[url('/webimages/header.jpg')] bg-no-repeat bg-cover bg-center brightness-50 grayscale-[40%]"></div>
      <div
        data-aos="fade-up"
        className="px-4 md:px-8 lg:px-12 w-full text-white text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <h2 className="font-bold text-2xl md:text-4xl mb-5">
          {t("hero-title")}
        </h2>
        <span className="text-lg md:text-2xl font-semibold">
          {t("hero-slug")}
        </span>
        <p className="pt-4 md:leading-7 text-base md:text-xl mb-6">
          {t("hero-paragraph")}
        </p>
        <CustomeLink title={t("about-btn")} href="/about" />
      </div>
    </section>
  );
};

export default Hero;
