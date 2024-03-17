import { Good } from "../../types";
import { findGoodIndexById } from "../../utils/findGood";
import { TGoodsActions } from "../actions";
import {
  CHANGE_QUANTITY,
  DELETE_GOOD,
  GET_GOODS__FAILURE,
  GET_GOODS__REQUEST,
  GET_GOODS__SUCCESS,
} from "../constants";

export type TState = {
  goods: Good[];
  isLoading: boolean;
  isError: boolean;
};

export const initialState: TState = {
  goods: [],
  isLoading: false,
  isError: false,
};

export const goodsReducer = (
  state = initialState,
  action: TGoodsActions
): TState => {
  switch (action.type) {
    case DELETE_GOOD:
      const newFilterGoods = state.goods.filter(
        ({ id }) => id !== action.payload
      );
      return {
        ...state,
        goods: newFilterGoods,
      };
    case CHANGE_QUANTITY:
      const findedIndexGood = findGoodIndexById(state.goods, action.payload.id);
      const newGoods = state.goods;
      if (findedIndexGood !== -1) {
        const findedGood = newGoods[findedIndexGood];
        newGoods[findedIndexGood] = {
          ...findedGood,
          quantity: action.payload.count,
        };
      }
      return {
        ...state,
        goods: newGoods,
      };
    case GET_GOODS__REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_GOODS__SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        goods: action.payload,
      };
    case GET_GOODS__FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        goods: [],
      };
    default:
      return state;
  }
};
