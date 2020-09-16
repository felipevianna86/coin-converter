import API_KEY from "../currency-api-key";
import axios from "axios";

const BASE_URL = "http://api.currencylayer.com/";

export function coinConverter() {
  const url = `${BASE_URL}/convert?access_key=${API_KEY}`;

  const parameters = {
    from: "USD",
    to: "BRL",
    amount: 10,
    format: 1,
  };

  const request = axios.get(url, parameters);

  return {
    type: "COIN_CONVERTER",
    payload: request,
  };
}
