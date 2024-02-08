import { useTranslations } from "next-intl";

function Banner() {
  const t = useTranslations("Banner");
  return (
    <section className="px-4 md:px-8 lg:px-16 my-20">
      <div
        data-aos="fade-down"
        className="flex flex-col items-center justify-center gap-6"
      >
        <h2 className="text-2xl font-bold text-gray-500 text-center">
          {t("banner-title")}
        </h2>
        <p className="text-center text-gray-500 uppercase">
          {t("banner-pargraph")}
        </p>
      </div>
      <hr className="border-t-4 border-gray-800 mt-20" />
    </section>
  );
}

export default Banner;
