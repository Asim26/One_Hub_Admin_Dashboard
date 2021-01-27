import {BASE_URL1,FETCH_BRAND} from '../Utilities/constants';  
 
 
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