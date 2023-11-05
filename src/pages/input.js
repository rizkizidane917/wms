import React, { useState, useEffect } from "react";
import Head from "next/head";
import { debounce } from "lodash";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";

import { useInboundStore } from "@/store/Inbound-store";
import { InboundAPI } from "@/api/service/inbound-api";
import { InputPageModal, InputPageTable } from "@/components/page-components";
import { Button, SearchFilter, Typography } from "@/components/shared";

import PageLayout from "@/layouts/page-layout";
import InputPageTableOutbound from "@/components/page-components/InputPage/inputpage-table-outbound";

export default function InputPages() {
  const { addToInventory, inbound } = useInboundStore();
  const [scanBarcode, setScanBarcode] = useState({ barcode: "" });
  const [getDetailBarcode, setGetDetailBarcode] = useState({
    sku: "",
    barcode: "",
    itemName: "",
    qty: 0,
  });
  const [getRackLocation, setGetRackLocation] = useState({
    storageLocation: "",
  });

  const [searchFilter, setSearchFilter] = useState("");
  const [newData, setNewData] = useState({});
  const [emptyData, setEmptyData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData(inbound);
  }, [inbound]);

  const { SendToGetDetailBarcode, SendBarcodeToRack } = InboundAPI();
  const doSendBarcode = SendToGetDetailBarcode({
    onSuccess: (res) => {
      if (res) {
        setIsLoading(false);
        if (res?.data !== "") {
          setGetDetailBarcode({
            sku: res?.data?.SKU,
            barcode: res?.data?.barcode,
            itemName: res?.data?.itemName,
            qty: res?.data?.qty,
          });
        } else {
          setGetDetailBarcode({
            sku: "",
            barcode: "",
            itemName: "",
            qty: "",
          });
          setEmptyData(false);
        }
      }
    },
    onError: (err) => {
      if (err) {
        console.log(err, err);
      }
    },
  });

  const handleChangeScan = (e) => {
    setScanBarcode({
      barcode: e.target.value,
    });
  };

  const storeData = SendBarcodeToRack({
    onSuccess: (res) => {
      if (res) {
        // setNewData({
        //   ...getDetailBarcode,
        //   storageLocation: res?.data?.storageLocation,
        // });
        setGetRackLocation({
          storageLocation: res?.data?.storageLocation,
        });
      }
    },
    onError: (err) => {
      if (err) {
        console.log(err);
      }
    },
  });

  const handleDetailBarcode = () => {
    setIsLoading(true);
    doSendBarcode.mutate(scanBarcode);
    storeData.mutate(scanBarcode);
  };

  const handleStoreData = () => {
    addToInventory(newData);
    setEmptyData(true);
    setGetDetailBarcode({
      sku: "",
      barcode: "",
      itemName: "",
      qty: 0,
    });
    setIsOpen(false);
    toast.success("Ok!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleOpenBarcode = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setEmptyData(true);
    setIsOpen(false);
    setGetDetailBarcode({
      sku: "",
      barcode: "",
      itemName: "",
      qty: "",
    });
  };

  // Search Filter
  const handleFilterName = (name) => {
    if (name == "") {
      setListData(inbound);
    } else {
      const filtered = listData.filter((item) => {
        return item?.itemName.toLowerCase().includes(name?.toLowerCase());
      });
      if (filtered?.length !== 0) {
        setListData(filtered);
      } else {
        setListData(inbound);
      }
    }
  };
  const debounceFilterName = debounce((name) => {
    handleFilterName(name);
  }, 300);

  const handleChangeFilterByName = (e) => {
    const name = e.target.value;
    debounceFilterName(name);
    setSearchFilter(name);
  };

  useEffect(() => {
    if (getRackLocation) {
      setNewData({
        ...getDetailBarcode,
        storageLocation: getRackLocation?.storageLocation,
      });
    }
  }, [getRackLocation, getDetailBarcode]);

  return (
    <>
      <Head>
        <title>Input Data - Infinity</title>
      </Head>
      <PageLayout>
        <div className="flex flex-col gap-6">
          <div className="md:flex items-center justify-between hidden">
            <Typography type="h1" className="text-slate-800 font-bold">
              List Inventory
            </Typography>
            <div className="flex items-center gap-2">
              <SearchFilter
                id="search_filter"
                name="search_filter"
                type="text"
                placeholder="Search by item name"
                className="text-sm uppercase placeholder:lowercase"
                onChange={handleChangeFilterByName}
                value={searchFilter}
                hasIconLeft={
                  <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 hover:text-slate-500" />
                }
              />

              <Button
                variant="primary"
                size="normal"
                type="button"
                onClick={handleOpenBarcode}
                hasIconLeft={<PlusIcon className="w-5 h-5 text-white" />}
              >
                Scan Barcode
              </Button>
            </div>
          </div>
          <div className="md:hidden flex flex-col">
            <Typography type="h1" className="text-slate-800 font-bold">
              List Inventory
            </Typography>
            <div className="flex items-center gap-2 mt-1">
              <SearchFilter
                id="search_filter"
                name="search_filter"
                type="text"
                placeholder="Search by item name"
                className="text-sm uppercase placeholder:lowercase max-w-[100px]"
                onChange={handleChangeFilterByName}
                value={searchFilter}
                hasIconLeft={
                  <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 hover:text-slate-500" />
                }
              />

              <Button
                variant="primary"
                size="normal"
                type="button"
                onClick={handleOpenBarcode}
                hasIconLeft={<PlusIcon className="w-5 h-5 text-white" />}
              >
                Scan Barcode
              </Button>
            </div>
          </div>
          <InputPageTable data={listData} />
        </div>

        <div className="flex flex-col gap-6 mt-12">
          <div className="flex items-center justify-between">
            <Typography type="h1" className="text-slate-800 font-bold">
              List Outbound
            </Typography>
          </div>
          <InputPageTableOutbound data={listData} />
        </div>

        <InputPageModal
          isOpen={isOpen}
          onClose={handleCloseModal}
          detailBarcode={getDetailBarcode}
          handleChangeScan={handleChangeScan}
          handleDetailBarcode={handleDetailBarcode}
          emptyData={emptyData}
          isLoading={isLoading}
          handleStoreData={handleStoreData}
        />

        <ToastContainer />
      </PageLayout>
    </>
  );
}
