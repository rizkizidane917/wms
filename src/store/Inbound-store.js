import { create } from "zustand";

export const useInboundStore = create((set) => ({
  inbound: [
    {
      barcode: "T0000001",
      itemName: "OUTSOLE",
      qty: 100,
      sku: "AIR-123",
      storageLocation: "RACK1-1",
    },
    {
      barcode: "T0000002",
      itemName: "OUTSOLE",
      qty: 100,
      sku: "AIR-123",
      storageLocation: "RACK1-2",
    },
    {
      barcode: "T0000003",
      itemName: "INSOLE",
      qty: 50,
      sku: "AIR-234",
      storageLocation: "RACK1-3",
    },
    {
      barcode: "T0000004",
      itemName: "INSOLE",
      qty: 50,
      sku: "AIR-234",
      storageLocation: "RACK1-4",
    },
  ],
  addToInventory: (newInbound) => {
    set((state) => {
      return { inbound: [...state.inbound, newInbound] };
    });
  },
  deleteInventory: (id) => {
    set((state) => {
      const deleted = state.inbound.filter((inbound) => inbound.id !== id);
      return { inbound: deleted };
    });
  },
}));
