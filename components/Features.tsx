import { useTranslations } from "next-intl";
import Image from "next/image";

function Features() {
  const t = useTranslations("Features");
  const allFeatures = [
    {
      id: 1,
      title: t("feature-one-title"),
      desc: t("feature-one-paragraph"),
      img: "/webimages/customizedOffices.jpg",
    },
    {
      id: 2,
      title: t("feature-two-title"),
      desc: t("feature-two-paragraph"),
      img: "/webimages/payment.jpg",
    },
    {
      id: 3,
      title: t("feature-three-title"),
      desc: t("feature-three-paragraph"),
      img: "/webimages/location-map.jpg",
    },
    {
      id: 4,
      title: t("feature-four-title"),
      desc: t("feature-four-paragraph"),
      img: "/webimages/businessSolution.jpg",
    },
  ];
  return (
    <section className="px-4 md:px-8 lg:px-16 bg-blue-100 py-5">
      <div className="p-8">
        <h4 className="text-2xl">{t("title")}</h4>
        <hr className="border-t-4 border-gray-800" />
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row md:flex-wrap gap-3 items-center justify-center w-full "
      >
        {allFeatures.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center justify-center gap-3 w-[300px]"
          >
            <div className="border-2 border-white relative w-72 h-60">
              <Image
                src={feature.img}
                alt={feature.title}
                width={250}
                height={250}
                className="w-full h-full transition-all duration-300 brightness-50"
              />
              <h6 className="font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center hover:scale-125 transition-all">
                {feature.title}
              </h6>
            </div>
            <p className="px-4 text-start h-40 text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
