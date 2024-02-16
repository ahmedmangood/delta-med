import Image from "next/image";

function HeaderSection({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: string;
}) {
  return (
    <section className="h-[400px] relative">
      <Image
        src={imageSrc}
        alt="slide"
        width={800}
        height={800}
        style={{ width: "100%", height: "100%" }}
        className="brightness-50"
      />
      <div
        data-aos="fade-up"
        className="px-4 md:px-8 lg:px-12 w-full text-white text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <h2 className="font-bold text-2xl md:text-4xl mb-5">{title}</h2>
      </div>
    </section>
  );
}

export default HeaderSection;
