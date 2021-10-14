import React from "react";

const Pill = ({category}) => (
  <div key={category.uuid} className="text-center mb-3 table-cell lg:inline-flex">
    <a href={`/categories/${category.name.toLowerCase()}`} className="group" >
      <div className="rounded-full shadow-sm overflow-hidden mx-1 px-3 bg-white border-gray-200 border group-hover:border-brand-600 group-hover:shadow-ss group-hover:bg-brand-600">
        <span className="text-xs  text-brand-600  group-hover:text-brand-50 uppercase tracking-wide">
          {category.name}
        </span>
      </div>
    </a>
  </div>
);
export default Pill;
