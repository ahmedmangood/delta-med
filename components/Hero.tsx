"use client";
import { useTranslations } from "next-intl";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const Hero = () => {
  const t = useTranslations("Hompage");
  const router = useRouter();
  const routeToAboutus = () => {
    router.push("/about");
  };

  return (
    <section className="h-screen relative">
      <div className="absolute w-full h-full bg-[url('/webimages/header.jpg')] bg-no-repeat bg-cover brightness-50"></div>
      <div
        data-aos="fade-up"
        className="text-white text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <h2 className="font-bold text-4xl mb-5">
          Delta Med Global Contracting
        </h2>
        <p>
          A Self-Performing General Contractor Focused on Highly Complex and
          Technical Projects
        </p>
        <CustomButton title="About Us" action={routeToAboutus} />
      </div>
    </section>
  );
};

export default Hero;
