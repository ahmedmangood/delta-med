"use client";
import { CustomButton } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

function OurserviceSection() {
  const router = useRouter();
  const routeToAllServices = () => {
    router.push("/services");
  };
  return (
    <section className="px-4 md:px-8 lg:px-16 flex flex-col gap-16 md:flex-row items-center justify-between my-10">
      <div className="flex flex-col gap-4 items-start">
        <h4 className="text-3xl font-semibold">our services</h4>
        <div>
          <p>Get access to all our services.</p>
          <p>Check out the options that are best for your business.</p>
        </div>
        <CustomButton
          title="Explore More"
          ourStyle="bg-green-600 hover:bg-green-400"
          action={routeToAllServices}
        />
      </div>
      <Image
        src={"/webimages/ourservicesSection.png"}
        alt={"Our Services"}
        width={400}
        height={400}
      />
    </section>
  );
}

export default OurserviceSection;
