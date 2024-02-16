import "../globals.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import type { Metadata } from "next";
import { Noto_Kufi_Arabic, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import AousAnimation from "@/components/aosAnimation";
import { Footer, NavBar } from "@/components";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  preload: true,
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-noto-kufi-arabic",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  preload: true,
});

export const metadata: Metadata = {
  title: "Delta Med",
  description:
    "Delta Med Global Contracting - A Self-Performing General Contractor Focused on Highly Complex and Technical Projects ",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      className={locale === "ar" ? notoKufiArabic.className : poppins.className}
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextTopLoader showSpinner={false} color="green" />
          <header>
            <NavBar />
          </header>
          <AousAnimation>{children}</AousAnimation>
        </NextIntlClientProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
