import {
  Banner,
  Features,
  Hero,
  OurValues,
  OurserviceSection,
  SlideSection,
} from "@/components";
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
    <main>
      <Hero />
      <Banner />
      <Features />
      <OurserviceSection />
      <SlideSection />
      <OurValues />
    </main>
  );
}
