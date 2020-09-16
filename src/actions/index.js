import { API_KEY } from "../currency-api-key";
import axios from "axios";

const BASE_URL = "http://api.currencylayer.com/";

export const COIN_CONVERTER = "COIN_CONVERTER";

export function coinConverter(convert) {
  const url = `${BASE_URL}/live?access_key=${API_KEY}&source=${convert.from}&currencies=${convert.to}`;

  const request = axios.get(url);

  return {
    type: COIN_CONVERTER,
    payload: request,
    amount: convert.amount,
  };
}
