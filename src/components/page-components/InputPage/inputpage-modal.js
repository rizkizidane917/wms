import { Button, Modal, Typography } from "@/components/shared";
import React from "react";

export default function InputPageModal({
  isOpen,
  onClose,
  isLoading,
  detailBarcode,
  emptyData,
  handleDetailBarcode,
  handleChangeScan,
  handleStoreData,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="p-4 max-w-[500px] w-full h-[500px] overflow-hidden shadow-xl relative"
    >
      <div className="mt-2 text-left flex flex-col gap-4">
        <Typography type="h2">Scan Barcode</Typography>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Input Barcode"
            onChange={(e) => handleChangeScan(e)}
            className="border border-slate-200 rounded-md py-2 px-3 shadow-md outline-none ring-transparent w-full "
          />
          <Button
            type="submit"
            variant="primary"
            size="normal"
            disabled={isLoading}
            className="max-w-[100px] w-full flex items-center justify-center"
            onClick={() => handleDetailBarcode()}
          >
            Scan
          </Button>
        </div>

        {/* List Data */}
        {isLoading && (
          <div className="absolute top-1/2 left-1/2 tranform -translate-y-1/2 -translate-x-1/2">
            <img src="/Gif/loading-dots.gif" width={30} height={30} />
          </div>
        )}
        {!isLoading && detailBarcode?.sku !== "" && (
          <div className="flex flex-col gap-2 mt-4">
            <Typography type="h4" className="mb-2 font-semibold">
              Stock Data:
            </Typography>

            <div className="space-y-1">
              <div className="grid grid-cols-2 gap-3">
                <Typography type="h4">SKU</Typography>
                <Typography type="h4">: {detailBarcode?.sku}</Typography>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Typography type="h4">Barcode</Typography>
                <Typography type="h4">: {detailBarcode?.barcode}</Typography>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Typography type="h4">Item Name</Typography>
                <Typography type="h4">: {detailBarcode?.itemName}</Typography>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Typography type="h4">QTY</Typography>
                <Typography type="h4">: {detailBarcode?.qty}</Typography>
              </div>
            </div>
          </div>
        )}

        {!isLoading && detailBarcode?.sku == "" && (
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <Typography type="h4" className="text-slate-400">
              {emptyData ? "- Data Empty -" : "Barcode Error..."}
            </Typography>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="normal"
          onClick={handleStoreData}
          disabled={
            isLoading ||
            detailBarcode?.sku == "" ||
            detailBarcode?.sku == undefined
          }
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          Store Data
        </Button>
      </div>
    </Modal>
  );
}
