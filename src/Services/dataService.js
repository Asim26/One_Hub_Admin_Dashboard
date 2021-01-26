import axios from "axios";

import { BASE_URL1, LOGIN_URL } from "../Utilities/constants";
import { NETWORK_ERROR } from "../Utilities/constants";

export async function loginRequest(obj) {
  try {
    const url = BASE_URL1 + LOGIN_URL;
    return await axios.post(url, obj);
  } catch (e) {
    return NETWORK_ERROR;
  }
}
