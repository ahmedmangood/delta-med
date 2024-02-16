"use client";
import { useTranslations } from "next-intl";
import { CustomButton, CustomeLink } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

function OurserviceSection() {
  const t = useTranslations("OurServices");
  const router = useRouter();
  const routeToAllServices = () => {
    router.push("/services");
  };
  return (
    <section className="px-4 md:px-8 lg:px-16 flex flex-col gap-16 md:flex-row items-center justify-between my-10">
      <div data-aos="fade-right" className="flex flex-col gap-4 items-start">
        <h4 className="text-3xl font-semibold">{t("services-title")}</h4>
        <div>
          <p>{t("services-paragraph-one")}</p>
          <p>{t("services-paragraph-two")}</p>
        </div>
        <CustomeLink
          title={t("services-btn")}
          ourStyle="bg-green-600 hover:bg-green-500 hover:text-gray-200 transition-colors"
          href="/services"
        />
      </div>
      <Image
        data-aos="fade-left"
        src={"/webimages/ourservicesSection.png"}
        alt={"Our Services"}
        width={400}
        height={400}
      />
    </section>
  );
}

export default OurserviceSection;
