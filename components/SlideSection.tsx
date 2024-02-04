"use client";
import { CustomButton } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

function SlideSection() {
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
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
        <h6 className="text-xl md:text-3xl italic text-white text-center">
          Get in touch with us
        </h6>
        <CustomButton title="Contact Us" action={routeToContact} />
      </div>
    </section>
  );
}

export default SlideSection;
