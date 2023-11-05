import React from "react";
import { useOutboundStore } from "@/store/outbound-store";

export default function InputPageTableOutbound() {
  const { outbound } = useOutboundStore();

  return (
    <div className="relative overflow-auto shadow-md rounded-md border border-slate-200">
      <table className="table-auto w-full relative overflow-auto  rounded-lg">
        <thead className="uppercase text-xs text-slate-500 border-slate-200 bg-[#f8fafc] ">
          <tr>
            <th scope="col" className="py-4 px-3 font-semibold">
              Barcode
            </th>
            <th scope="col" className="py-4 px-3 font-semibold">
              Item Name
            </th>
            <th scope="col" className="py-4 px-3 font-semibold">
              SKU
            </th>
            <th scope="col" className="py-4 px-3 font-semibold">
              QTY
            </th>

            <th scope="col" className="py-4 px-3 font-semibold">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          {outbound?.map((outbound, index) => (
            <tr
              className="bg-white border-b border-b-slate-200 last:border-none text-sm"
              key={index}
            >
              <th
                scope="row"
                className="py-4 px-3 whitespace-nowrap font-semibold"
              >
                {outbound?.barcode}
              </th>
              <th
                scope="row"
                className="py-4 px-3 whitespace-nowrap font-normal"
              >
                {outbound?.itemName}
              </th>
              <th
                scope="row"
                className="py-4 px-3 whitespace-nowrap font-normal"
              >
                {outbound?.SKU}
              </th>
              <th
                scope="row"
                className="py-4 px-3 whitespace-nowrap font-normal"
              >
                {outbound?.qty}
              </th>

              <th
                scope="row"
                className="py-4 px-3 whitespace-nowrap font-semibold"
              >
                <span className="bg-green text-white px-3 py-2 rounded-full">
                  DONE
                </span>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
