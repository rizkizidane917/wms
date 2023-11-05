import { create } from "zustand";

export const useOutboundStore = create((set) => ({
  outbound: [
    {
      barcode: "T0000001",
      itemName: "OUTSOLE",
      qty: 100,
      SKU: "AIR-123",
    },
    {
      barcode: "T0000002",
      itemName: "OUTSOLE",
      qty: 100,
      SKU: "AIR-123",
    },
  ],
  addToOutbound: (newOutbound) => {
    set((state) => {
      return { outbound: [...state.outbound, newOutbound] };
    });
  },
}));
