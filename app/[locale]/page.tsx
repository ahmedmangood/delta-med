import { AboutUs, ContactUs, Hero, ServiceSlider } from "@/components";
import Plans from "@/components/Plans";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("Hompage");

  unstable_setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceSlider />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
