import API_KEY from "../currency-api-key";
import axios from "axios";

const BASE_URL = "http://api.currencylayer.com/";

export const COIN_CONVERTER = "COIN_CONVERTER";

export function coinConverter(convert) {
  const url = `${BASE_URL}/convert?access_key=${API_KEY}`;

  const parameters = {
    from: convert.from,
    to: convert.to,
    amount: convert.amount,
    format: 1,
  };

  const request = axios.get(url, parameters);

  return {
    type: COIN_CONVERTER,
    payload: request,
  };
}
