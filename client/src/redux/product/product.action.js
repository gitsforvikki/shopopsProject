import axios from "axios";
import * as userUtil from "../../util/userUtil";
import * as authUtil from "../../util/authUtil";

export const GET_MENS_PRODUCT_REQUEST = "GET_MENS_PRODUCT_REQUEST;";
export const GET_MENS_PRODUCT_SUCCESS = "GET_MENS_PRODUCT_SUCCESS;";
export const GET_MENS_PRODUCT_FAILED = "GET_MENS_PRODUCT_FAILED;";

export const GET_WOMENS_PRODUCT_REQUEST = "GET_WOMENS_PRODUCT_REQUEST;";
export const GET_WOMENS_PRODUCT_SUCCESS = "GET_WOMENS_PRODUCT_SUCCESS;";
export const GET_WOMENS_PRODUCT_FAILED = "GET_WOMENS_PRODUCT_FAILED;";

export const GET_KIDS_PRODUCT_REQUEST = "GET_KIDS_PRODUCT_REQUEST;";
export const GET_KIDS_PRODUCT_SUCCESS = "GET_KIDS_PRODUCT_SUCCESS;";
export const GET_KIDS_PRODUCT_FAILED = "GET_KIDS_PRODUCT_FAILED;";

export const UPLOAD_PRODUCT_REQUEST = "UPLOAD_PRODUCT_REQUEST;";
export const UPLOAD_PRODUCT_SUCCESS = "UPLOAD_PRODUCT_SUCCESS;";
export const UPLOAD_PRODUCT_FAILED = "UPLOAD_PRODUCT_FAILED;";

export const GET_SINGLE_PRODUCTS_REQUEST = "GET_SINGLE_PRODUCTS_REQUEST";
export const GET_SINGLE_PRODUCTS_SUCCESS = "GET_SINGLE_PRODUCTS_SUCCESS";
export const GET_SINGLE_PRODUCTS_FAILURE = "GET_SINGLE_PRODUCTS_FAILURE";

//get mens product
export const getMensProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_MENS_PRODUCT_REQUEST });
      const dataUrl = "/api/product/mens";
      const response = await axios.get(dataUrl);
      dispatch({ type: GET_MENS_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_MENS_PRODUCT_FAILED, payload: { error: error } });
    }
  };
};

//get womens product
export const getWomensProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_WOMENS_PRODUCT_REQUEST });
      const dataUrl = "/api/product/womens";
      const response = await axios.get(dataUrl);
      dispatch({ type: GET_WOMENS_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_WOMENS_PRODUCT_FAILED, payload: { error: error } });
    }
  };
};

//get kids product
export const getKidsProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_KIDS_PRODUCT_REQUEST });
      const dataUrl = "/api/product/kids";
      const response = await axios.get(dataUrl);
      dispatch({ type: GET_KIDS_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_KIDS_PRODUCT_FAILED, payload: { error: error } });
    }
  };
};

//UPLOAD PRODUCTS

export const uploadProducts = (product) => {
  return async (dispatch) => {
    try {
      if (userUtil.isAuthentiated()) {
        authUtil.setAuthToken(userUtil.getToken());
      }
      dispatch({ type: UPLOAD_PRODUCT_REQUEST });
      let dataUrl = "/api/product/upload";
      let response = await axios.post(dataUrl, product);
      dispatch({ type: UPLOAD_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: UPLOAD_PRODUCT_FAILED, payload: { error: error } });
    }
  };
};

//get single product
export const getSingleProduct = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_SINGLE_PRODUCTS_REQUEST });
      let dataUrl = `/api/product/${productId}`;
      let response = await axios.get(dataUrl);
      dispatch({ type: GET_SINGLE_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_SINGLE_PRODUCTS_FAILURE,
        payload: { error: error },
      });
    }
  };
};
