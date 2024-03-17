import { Good } from "../../types";
import { request } from "../../utils/api";
import {
  CHANGE_QUANTITY,
  DELETE_GOOD,
  GET_GOODS__FAILURE,
  GET_GOODS__REQUEST,
  GET_GOODS__SUCCESS,
} from "../constants";
import { AppThunkAction, RecordType } from "../types";

export interface IGetGoodsRequest {
  readonly type: typeof GET_GOODS__REQUEST;
}

export interface IGetGoodsSuccess {
  readonly type: typeof GET_GOODS__SUCCESS;
  readonly payload: Good[];
}

export interface IGetGoodsFailure {
  readonly type: typeof GET_GOODS__FAILURE;
}

export interface IGetDeleteGood {
  readonly type: typeof DELETE_GOOD;
  readonly payload: number;
}

export interface IGetChangeQuantityGood {
  readonly type: typeof CHANGE_QUANTITY;
  readonly payload: RecordType;
}

export type TGoodsActions =
  | IGetGoodsRequest
  | IGetGoodsSuccess
  | IGetGoodsFailure
  | IGetDeleteGood
  | IGetChangeQuantityGood;

export const getGoodsAction = (): IGetGoodsRequest => ({
  type: GET_GOODS__REQUEST,
});

export const getGoodsSuccessAction = (data: Good[]): IGetGoodsSuccess => ({
  type: GET_GOODS__SUCCESS,
  payload: data,
});

export const getGoodsFailureAction = (): IGetGoodsFailure => ({
  type: GET_GOODS__FAILURE,
});

export const deleteGood = (id: number): IGetDeleteGood => {
  return {
    type: DELETE_GOOD,
    payload: id,
  };
};

export const changeQuantityGood = (
  id: number,
  count: number
): IGetChangeQuantityGood => {
  return {
    type: CHANGE_QUANTITY,
    payload: { id, count },
  };
};

export const getGoodsData = (): AppThunkAction => {
  return async function (dispatch) {
    dispatch(getGoodsAction());

    request()
      .then((data) => {
        dispatch(getGoodsSuccessAction(data.data));
      })
      .catch(() => {
        dispatch(getGoodsFailureAction());
      });
  };
};
