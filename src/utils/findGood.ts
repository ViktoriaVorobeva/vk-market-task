import { Good } from "../types";

export const findGoodIndexById = (goods: Good[], id: number) => {
  return goods.findIndex((good) => good.id === id);
};
