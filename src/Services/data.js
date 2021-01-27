import axios from "axios";

import { BASE_URL1, LOGIN_URL,FETCH_BRAND  } from "../Utilities/constant";
import { NETWORK_ERROR } from "../Utilities/constant";

export async function loginRequest(obj) {
  try {
    const url = BASE_URL1 + LOGIN_URL;
    return await axios.post(url, obj);
  } catch (e) {
    return NETWORK_ERROR;
  }
}

export async function FetchBrandRequest(token) {
  try {
    const url = BASE_URL1 + FETCH_BRAND;
    const config = {
      headers: {
        "x-access-token": "Bearer " + token,
      },
    };
    return await axios.post(url, null, config);
  } catch (error) {
    return error;
  }
}