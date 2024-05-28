import axios from "axios";
import * as userUtil from "../../util/userUtil";
import * as authUtil from "../../util/authUtil";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const UPDATE_ADDRESS_REQUEST = "UPDATE_ADDRESS_REQUEST";
export const UPDATE_ADDRESS_SUCCESS = "UPDATE_ADDRESS_SUCCESS";
export const UPDATE_ADDRESS_FAILED = "UPDATE_ADDRESS_FAILED";

export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE";

//register user

export const registerUSer = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      let dataUrl = "/api/user/register";
      let response = await axios.post(dataUrl, user);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: REGISTER_USER_FAILED, payload: { error: error } });
      //let errorList = error.response.data.errors;
      // for(let error of errorList){
      //   dispatch(alertActions.setAlert(error.msg , 'danger'));
      // }
    }
  };
};

//login user
export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_USER_REQUEST });
      let dataUrl = "/api/user/login";
      let response = await axios.post(dataUrl, user);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
      dispatch(getUSer());
    } catch (error) {
      console.log(error);
      dispatch({ type: LOGIN_USER_FAILED, payload: { error: error } });
    }
  };
};

//get USer

export const getUSer = () => {
  return async (dispatch) => {
    try {
      if (userUtil.isAuthentiated()) {
        authUtil.setAuthToken(userUtil.getToken());
      }
      dispatch({ type: GET_USER_REQUEST });
      let dataUrl = "/api/user/";
      let response = await axios.get(dataUrl);
      dispatch({ type: GET_USER_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_USER_FAILED, payload: { error: error } });
    }
  };
};

//update address
export const upateAddress = (address) => {
  return async (dispatch) => {
    try {
      if (userUtil.isAuthentiated()) {
        authUtil.setAuthToken(userUtil.getToken());
      }
      dispatch({ type: UPDATE_ADDRESS_REQUEST });
      let dataUrl = "/api/user/update-address";
      let response = await axios.post(dataUrl, address);
      dispatch({ type: UPDATE_ADDRESS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//logout user
export const logoutUser = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGOUT_USER });
    } catch (error) {
      console.log(error);
      dispatch({ type: LOGOUT_USER_FAILURE, payload: { error: error } });
    }
  };
};
