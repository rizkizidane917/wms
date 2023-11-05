import { useMutation } from "@tanstack/react-query";
import fetcher from "../fetcher";

export const InboundAPI = () => {
  const SendToGetDetailBarcode = ({ onSuccess, onError }) => {
    return useMutation({
      mutationKey: ["parts"],
      mutationFn: async (payload) => {
        return await fetcher
          .post(`/parts/getDetail`, payload)
          .then((res) => res);
      },
      onSuccess,
      onError,
    });
  };

  const SendBarcodeToRack = ({ onSuccess, onError }) => {
    return useMutation({
      mutationKey: ["robots"],
      mutationFn: async (payload) => {
        return await fetcher
          .post(`/robots/sendInboundTask`, payload)
          .then((res) => res);
      },
      onSuccess,
      onError,
    });
  };

  // const sendToGetDetailBarcode = ({ onSuccess, onError }) => {
  //   useMutation(async (payload) => await fetcher.post(`/getDetail`, payload), {
  //     onSuccess,
  //     onError,
  //   });
  // };

  // const sendToGetDetailBarcode = ({ onSuccess, onError }) => {
  //   return (
  //     useMutation(async (payload) => {
  //       try {
  //         const response = await fetcher.post("/getDetail", payload);
  //         return response.data;
  //       } catch (error) {
  //         throw error;
  //       }
  //     }),
  //     { onSuccess, onError }
  //   );
  // };

  return { SendToGetDetailBarcode, SendBarcodeToRack };
};
