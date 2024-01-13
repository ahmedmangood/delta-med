import { useTranslations } from "next-intl";
import React from "react";
function LastFooter() {
  const t = useTranslations("Footer");
  return (
    <section className="flex flex-col items-center justify-center text-gray-300 py-10 border-t-2 border-white mt-3 px-5 text-center">
      <span className="">{t("footer-title")}</span>
    </section>
  );
}

export default LastFooter;
