import React from "react";

export default function CardCTA({
  children,
  className,
  style,
  onClick,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-md  scale:100 hover:scale-105 transform duration-200 ease-in ${className} `}
      style={{
        boxShadow:
          "0px 10px 10px 0px rgba(0, 0, 0, 0.04), 0px 20px 25px 0px rgba(0, 0, 0, 0.10)",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
