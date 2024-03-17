import { data } from "../mocks";
import { GetGoodsResponse } from "../types";
import { DELAY } from "./constants";

const fetcher = (): Promise<GetGoodsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: data });
    }, DELAY);
  });
};

export const request = (): Promise<GetGoodsResponse> => {
  return fetcher().then((response) => {
    if (!response.data) {
      throw new Error("not found data");
    }
    return response;
  });
};
