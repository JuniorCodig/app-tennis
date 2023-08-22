import Axios from "axios";

// Pré setando as configurações para utilização do axios
export const api = Axios.create({
  baseURL: process.env.API_EDUCA_CITY,
  timeout: 375000,
  headers: {
    common: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
});
