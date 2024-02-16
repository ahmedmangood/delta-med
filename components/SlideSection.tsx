"use client";
import { useTranslations } from "next-intl";
import { CustomButton, CustomeLink } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

function SlideSection() {
  const t = useTranslations("SlideSection");
  const router = useRouter();
  const routeToContact = () => {
    router.push("/contact");
  };
  return (
    <section className="relative my-20">
      <Image
        src={"/webimages/Riyadh-skyscrapers.jpg"}
        alt="cover"
        width={800}
        height={800}
        className="w-full h-[400px] md:h-[600px] brightness-50"
      />
      <div className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center gap-4">
        <h6
          data-aos="fade-up"
          className="text-xl md:text-4xl italic text-gray-200 text-center font-bold"
        >
          {t("slidesection-title")}
        </h6>
        <CustomeLink
          animate="fade-down"
          title={t("slidesection-btn")}
          href="/contact"
        />
      </div>
    </section>
  );
}

export default SlideSection;
