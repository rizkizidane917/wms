import React, { useState, useEffect } from "react";
import { Button } from "@/components/shared";
import { OutboundAPI } from "@/api/service/outbound-api";
import { useOutboundStore } from "@/store/outbound-store";
import { useInboundStore } from "@/store/Inbound-store";

export default function InputPageTable({ data }) {
  const { addToOutbound } = useOutboundStore();
  const { deleteInventory } = useInboundStore();

  const [getDataOutBound, setGetDataOutBound] = useState({
    SKU: "",
    barcode: "",
    itemName: "",
    qty: 0,
  });
  const { SendToOutbound } = OutboundAPI();
  const doSendToOutbound = SendToOutbound({
    onSuccess: (res) => {
      if (res) {
        setGetDataOutBound({
          SKU: res?.data?.itemDetail?.SKU,
          barcode: res?.data?.itemDetail?.barcode,
          itemName: res?.data?.itemDetail?.itemName,
          qty: res?.data?.itemDetail?.qty,
        });
      }
    },
    onError: (err) => {
      if (err) {
        console.log(err);
      }
    },
  });

  const handleSendToOutbound = (location, index) => {
    doSendToOutbound.mutate({
      storageLocation: location,
    });
    deleteInventory(index);
  };

  useEffect(() => {
    if (getDataOutBound?.qty != 0) {
      addToOutbound(getDataOutBound);
    }
  }, [getDataOutBound]);

  return (
    <div className="relative overflow-auto shadow-md rounded-md border border-slate-200">
      {data ? (
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
                Storage Location
              </th>
              <th scope="col" className="py-4 px-3 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((inbound, index) => (
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
                <th className="py-4 px-3 whitespace-nowrap font-normal">
                  {/* Button Primary Action */}
                  <Button
                    onClick={() =>
                      handleSendToOutbound(inbound?.storageLocation, index)
                    }
                    size="normal"
                    type="submit"
                    variant="primary"
                  >
                    Outbound
                  </Button>
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
