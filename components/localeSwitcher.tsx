"use client";

import { Select } from "flowbite-react";
import { useLocale } from "next-intl";
// import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { IoLanguageSharp } from "react-icons/io5";
import { useRouter, usePathname } from "next-intl/client";
function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathName = usePathname();
  const onSelecting = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathName, { locale: nextLocale });
    });
  };

  return (
    <>
      <Select
        defaultValue={localeActive}
        onChange={onSelecting}
        disabled={isPending}
      >
        <option value="ar">اللغة العربية</option>
        <option value="en">English</option>
      </Select>
    </>
  );
}

export default LocaleSwitcher;
