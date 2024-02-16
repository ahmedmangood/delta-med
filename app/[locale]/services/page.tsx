"use client";
import { HeaderSection, ServiceSection, ServiceTitle } from "@/components";
import { useTranslations } from "next-intl";

function ServicesPage() {
  const t = useTranslations("Navbar_Links");
  const t2 = useTranslations("ServicesPage");
  return (
    <main>
      <HeaderSection
        title={t("allServices")}
        imageSrc="/webimages/mission.jpg"
      />
      <ServiceTitle title={t2("services-title")} />
      <ServiceSection
        title={t("servicedOffices")}
        img="/webimages/customizedOffices.jpg"
        link="/services/servicedOffices"
        paragraph={t2("servicedOffices-paragraph")}
        reverse={false}
      />
      <hr className="border-b-2 border-black mx-8" />
      <ServiceSection
        title={t("virtualOffices")}
        img="/webimages/virtual-ofice-space-in-Noida.jpg"
        link="/services/virtualOffices"
        paragraph={t2("virtualOffices-paragraph")}
        reverse={true}
      />
      <hr className="border-b-2 border-black mx-8" />
      <ServiceSection
        title={t("meetingRooms")}
        img="/webimages/meetingrooms.jpg"
        link="/services/meetingRooms"
        paragraph={t2("meetingRooms-paragraph")}
        reverse={false}
      />
      <hr className="border-b-2 border-black mx-8" />
      <ServiceSection
        title={t("businessSupport")}
        img="/webimages/businessSolution.jpg"
        link="/services/businessSupport"
        paragraph={t2("businessSupport-paragraph")}
        reverse={true}
      />
      <hr className="border-b-2 border-black mx-8" />
      <ServiceSection
        title={t("companyFormation")}
        img="/webimages/companyformation.png"
        link="/services/companyFormation"
        paragraph={t2("companyFormation-paragraph")}
        reverse={false}
      />
    </main>
  );
}

export default ServicesPage;
