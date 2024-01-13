"use client";

import { CustomFlowbiteTheme, Tabs } from "flowbite-react";

import { BsPeople, BsPerson } from "react-icons/bs";

export default function OurTab() {
  const customeTheme: CustomFlowbiteTheme = {
    tab: {
      tablist: {
        base: "flex justify-center items-center m-auto w-auto bg-secondary-color rounded-full px-12 py-2",
        tabitem: {
          styles: {
            pills: {
              active: {
                on: "rounded-full bg-white focus:ring-0 text-black px-8 py-2",
                off: "rounded-full px-8 py-2 focus:ring-0 bg-secondary-color hover:bg-white hover:text-black text-white transition-colors",
              },
            },
          },
        },
      },
    },
  };

  return (
    <>
      <Tabs.Group theme={customeTheme.tab} aria-label="Pills" style="pills">
        <Tabs.Item active title="1 kid" icon={BsPerson}></Tabs.Item>
      </Tabs.Group>
    </>
  );
}
