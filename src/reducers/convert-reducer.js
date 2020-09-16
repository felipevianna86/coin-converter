import { COIN_CONVERTER } from "../actions";

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  if (action.type === COIN_CONVERTER) {
    const result = action.payload.data;

    return result;
  }
  return state;
}
