import React from "react";

function ServiceTitle({ title }: { title: string }) {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-4">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <hr className="border-b-2 border-black" />
    </div>
  );
}

export default ServiceTitle;
