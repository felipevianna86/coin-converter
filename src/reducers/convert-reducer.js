import { COIN_CONVERTER } from "../actions";

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  if (action.type === COIN_CONVERTER) {
    return {
      result: action.payload.data,
      amount: action.amount,
    };
  }
  return state;
}
