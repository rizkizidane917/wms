import React from "react";

export default function Card({ className, children }) {
  return (
    <div
      className={`${className} bg-white shadow-lg rounded-sm border border-slate-200 px-5 pt-5 overflow-auto `}
    >
      {children}
    </div>
  );
}
