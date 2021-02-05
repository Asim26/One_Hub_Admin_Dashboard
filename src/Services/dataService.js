import axios from "axios";

import { BASE_URL1, 
  LOGIN_URL,
  ORDER_SUMMARY_URL,
  LIST_PRODUCT,ORDER_URL 
  ,FETCH_BRAND,
   USER_FEEDBACK,
   PRODUCT_SALES,
   GET_COMMISSION,
   BRAND_PRODUCTS,
   FETECH_REPORT,
   UPLOAD_IMAGE_URL,
   CREATE_PRODUCT,
   EDIT_PRODUCT,
   DELETE_PRODUCT
  } from "../Utilities/constants";

import { NETWORK_ERROR } from "../Utilities/constants";

export async function loginRequest(obj) {
  try {
    const url = BASE_URL1 + LOGIN_URL;
    return await axios.post(url, obj);
  } catch (e) {
    return NETWORK_ERROR;
  }
}


export async function fetchOrderSummaryRequest(obj, token) {
  try {
    const url = BASE_URL1 + ORDER_SUMMARY_URL;
    const config = {
      headers: {
        "x-access-token": "bearer " + token,
      },
    };
    return await axios.post(url, obj, config);
  } catch (e) {
    return NETWORK_ERROR;
  }
}

export async function listProductRequest(token) {
  try {
    const url = BASE_URL1 + LIST_PRODUCT;
    const config = {
      headers: {
        "x-access-token": "Bearer " + token,
      },
    };
    return await axios.post(url, null, config);
  } catch (e) {
    return NETWORK_ERROR;
  }
}

export async function fetchOrdersRequest(token) {
  try {
    const url = BASE_URL1 + ORDER_URL;
    const config = {
      headers: {
        "x-access-token": "bearer " + token,
      },
    };
    return await axios.post(url, null, config);
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
  } catch (e) {
    return NETWORK_ERROR;
  }
}


export async function userFeedbackRequest(token) {
  try {
    const url = BASE_URL1 + USER_FEEDBACK;
    const config = {
      headers: {
        "x-access-token": "Bearer " + token,
      },
    };
    return await axios.post(url, null, config);
  } catch (e) {
    return NETWORK_ERROR;
  }
}

export async function productSalesRequest(token) {
  try {
    const url = BASE_URL1 + PRODUCT_SALES;
    const config = {
      headers: {
        "x-access-token": "Bearer " + token,
      },
    };
    return await axios.post(url, null, config);
  } catch (e) {
    return NETWORK_ERROR;
  }
}

export async function getCommissionRequest(token) {
  try {
    const url = BASE_URL1 + GET_COMMISSION;
    const config = {
      headers: {
        "x-access-token": "Bearer " + token,
      },
    };
    return await axios.post(url, null, config);
  } catch (e) {
    return NETWORK_ERROR;
  }
}

export async function brandsProductsRequest(token) {
  try {
    const url = BASE_URL1 + BRAND_PRODUCTS;
    const config = {
      headers: {
        "x-access-token": "Bearer " + token,
      },
    };
    return await axios.post(url, null, config);
  } catch (e) {
    return NETWORK_ERROR;
  }
}

export async function fetchReportRequest(token) {
  try {
    const url = BASE_URL1 + FETECH_REPORT;
    const config = {
      headers: {
        "x-access-token": "Bearer " + token,
      },
    };
    return await axios.post(url, null, config);
  } catch (e) {
    return NETWORK_ERROR;
  }
}
export async function uploadImageRequest(obj, token) {
  try {
    const url = BASE_URL1 + UPLOAD_IMAGE_URL;
    const config = {
      headers: {
        "x-access-token": "bearer " + token,
      },
    };
    return await axios.post(url, obj, config);
  } catch (e) {
    return NETWORK_ERROR;
  }
}

export async function createProductRequest(obj,token) {
  const config = {
    headers: {
      "x-access-token": "bearer " + token,
    },
  };

  try {
    const url = BASE_URL1 + CREATE_PRODUCT;
    return await axios.post(url, obj, config);
  } catch (e) {
    return NETWORK_ERROR;
  }
}

export async function editProductRequest(obj, token) {
  try {
    const url = BASE_URL1 + EDIT_PRODUCT;
    const config = {
      headers: {
        "x-access-token": "bearer " + token,
      },
    };
    return await axios.post(url, obj, config);
  } catch (e) {
    return NETWORK_ERROR;
  }
}

export async function deleteProductRequest(obj,token) {
  const config = {
    headers: {
      "x-access-token": "bearer " + token,
    },
  };

  try {
    const url = BASE_URL1 + DELETE_PRODUCT;
    return await axios.post(url, obj, config);
  } catch (e) {
    return NETWORK_ERROR;
  }
}