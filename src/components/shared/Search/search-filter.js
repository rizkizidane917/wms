import React from "react";

export default function SearchFilter({
  id,
  name,
  placeholder,
  onChange,
  type,
  className,
  hasIconLeft,
  hasIconRight,
  ...props
}) {
  return (
    <div className="bg-white px-3 py-2 rounded-md shadow-md relative border border-slate-200 ">
      <button className="absolute top-1/2 transform -translate-y-1/2 left-1.5">
        {hasIconLeft}
      </button>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
        className={`${className} outline-none placeholder:text-sm truncate font-normal 
        ${hasIconLeft && "ml-5"} ${hasIconRight && "mr-4"} `}
      />
      <button className="absolute top-1/2 transform -translate-y-1/2 right-1.5">
        {hasIconRight}
      </button>
    </div>
  );
}
