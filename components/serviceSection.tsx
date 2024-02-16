import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function ServiceSection({
  title,
  paragraph,
  reverse,
  img,
  link,
}: {
  title: string;
  paragraph: string;
  reverse: boolean;
  img: string;
  link: string;
}) {
  const t = useTranslations("ServicesPage");
  return (
    <section
      className={`px-4 md:px-8 lg:px-16 flex flex-col gap-16 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between my-10`}
    >
      <div data-aos="fade-right" className="flex flex-col gap-4 items-start">
        <h4 className="text-4xl font-normal">{title}</h4>
        <div>
          <p>{paragraph}</p>
          <Link
            href={link}
            className="text-sm underline hover:text-gray-400 transition-colors"
          >
            {t("readMore")}
          </Link>
        </div>
      </div>
      <Image
        data-aos="fade-left"
        src={img}
        alt={"Our Services"}
        width={400}
        height={400}
        className="rounded-lg"
      />
    </section>
  );
}

export default ServiceSection;
