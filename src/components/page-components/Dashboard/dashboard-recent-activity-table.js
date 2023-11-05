import React from "react";

export default function DashboardRecentActivityTable({ data }) {
  return (
    <div className="relative overflow-auto ">
      {data ? (
        <table className="table-auto w-full relative overflow-auto ">
          <thead className="uppercase text-xs text-slate-500 border-slate-200 bg-[#f8fafc] ">
            <tr>
              <th scope="col" className="py-3 px-2 font-semibold">
                Barcode
              </th>
              <th scope="col" className="py-3 px-2 font-semibold">
                Item Name
              </th>
              <th scope="col" className="py-3 px-2 font-semibold">
                SKU
              </th>
              <th scope="col" className="py-3 px-2 font-semibold">
                QTY
              </th>
              <th scope="col" className="py-3 px-2 font-semibold">
                Storage Location
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.slice(0, 4)?.map((inbound, index) => (
              <tr
                className="bg-white border-b border-b-slate-200 last:border-none text-sm"
                key={index}
              >
                <th
                  scope="row"
                  className="py-4 px-3 whitespace-nowrap font-semibold"
                >
                  {inbound?.barcode}
                </th>
                <th className="py-4 px-3 whitespace-nowrap font-normal">
                  {inbound?.itemName}
                </th>
                <th className="py-4 px-3 whitespace-nowrap font-normal">
                  {inbound?.sku}
                </th>
                <th className="py-4 px-3 whitespace-nowrap font-normal">
                  {inbound?.qty}
                </th>
                <th className="py-4 px-3 whitespace-nowrap font-normal">
                  {inbound?.storageLocation}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </div>
  );
}
