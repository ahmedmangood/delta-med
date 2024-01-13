"use client";
import { useTranslations } from "next-intl";
import { LastFooter, MapAndSocial } from "..";

export default function Footer() {
  return (
    <footer className="h-full flex flex-col bg-gradient-to-r from-primary-color to-slate-500 border-t-2 border-white">
      <MapAndSocial />
      <LastFooter />
    </footer>
  );
}
