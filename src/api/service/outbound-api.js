import { useMutation } from "@tanstack/react-query";
import fetcher from "../fetcher";

export const OutboundAPI = () => {
  const SendToOutbound = ({ onSuccess, onError }) => {
    return useMutation({
      mutationKey: ["robots"],
      mutationFn: async (payload) => {
        return await fetcher
          .post(`/robots/sendOutboundTask`, payload)
          .then((res) => res);
      },
      onSuccess,
      onError,
    });
  };

  return { SendToOutbound };
};
