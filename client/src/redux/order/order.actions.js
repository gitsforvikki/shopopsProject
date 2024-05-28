import axios from "axios";

import * as userUtil from "../../util/userUtil";
import * as authUtil from "../../util/authUtil";

//ADD TO CART
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

//increment qty
export const INCR_QTY = "INCR_QTY";
export const INCR_QTY_FAILURE = "INCR_QTY_FAILURE";

//delete cart itam
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const DELETE_CART_ITEM_FAILURE = "DELETE_CART_ITEM_FAILURE";

//decrement qty
export const DECR_QTY = "DECR_QTY";
export const DECR_QTY_FAILURE = "DECR_QTY_FAILURE";

//clear cart items
export const CLEAR_CART_ITEMS = "CLEAR_CART_ITEMS";
export const CLEAR_CART_ITEMS_FAILURE = "CLEAR_CART_ITEMS_FAILURE";
//order place
export const ORDER_PLACE_REQUEST = "ORDER_PLACE_REQUEST";
export const ORDER_PLACE_SUCCESS = "ORDER_PLACE_SUCCESS";
export const ORDER_PLACE_FAILURE = "ORDER_PLACE_FAILURE";

export const GET_ALL_ORDER_REQUEST = "GET_ALL_ORDER_REQUEST";
export const GET_ALL_ORDER_SUCCESS = "GET_ALL_ORDER_SUCCESS";
export const GET_ALL_ORDER_FAILURE = "GET_ALL_ORDER_FAILURE";

export const STRIP_PAYMENT_REQUEST = "STRIP_PAYMENT_REQUEST";
export const STRIP_PAYMENT_SUCCESS = "STRIP_PAYMENT_SUCCESS";
export const STRIP_PAYMENT_FAILURE = "STRIP_PAYMENT_FAILURE";

//add to cart
export const addToCart = (item, navigate) => {
  return (dispatch) => {
    try {
      dispatch({ type: ADD_TO_CART, payload: { item: item } });
      navigate("/products/cart");
    } catch (error) {
      console.log(error);
      dispatch({ type: ADD_TO_CART_FAILURE, payload: { error: error } });
    }
  };
};

//increment qty
export const incrementQty = (productId) => {
  return (dispatch) => {
    try {
      dispatch({ type: INCR_QTY, payload: { productId: productId } });
    } catch (error) {
      console.log(error);
      dispatch({ type: INCR_QTY_FAILURE, payload: { error: error } });
    }
  };
};

//decement cart items
export const decrementQty = (productId) => {
  return (dispatch) => {
    try {
      dispatch({ type: DECR_QTY, payload: { productId: productId } });
    } catch (error) {
      console.log(error);
      dispatch({ type: DECR_QTY_FAILURE, payload: { error: error } });
    }
  };
};

//delete cart items
export const deleteCartItem = (productId) => {
  return (dispatch) => {
    try {
      dispatch({ type: DELETE_CART_ITEM, payload: { productId: productId } });
    } catch (error) {
      console.log(error);
      dispatch({ type: DELETE_CART_ITEM_FAILURE, payload: { error: error } });
    }
  };
};

//clear cart items
export const clearCartItems = () => {
  return (dispatch) => {
    try {
      dispatch({ type: CLEAR_CART_ITEMS });
    } catch (error) {
      console.log(error);
      dispatch({ type: CLEAR_CART_ITEMS_FAILURE, payload: { error: error } });
    }
  };
};

//order place
export const placeOrder = (order) => {
  return async (dispatch) => {
    try {
      if (userUtil.isAuthentiated) {
        authUtil.setAuthToken(userUtil.getToken());
      }
      dispatch({ type: ORDER_PLACE_REQUEST });
      let dataUrl = "/api/order";
      let response = await axios.post(dataUrl, order);
      dispatch({ type: ORDER_PLACE_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: ORDER_PLACE_FAILURE, payload: { error: error } });
    }
  };
};

//get all orders

export const getAllOrders = () => {
  return async (dispatch) => {
    try {
      if (userUtil.isAuthentiated) {
        authUtil.setAuthToken(userUtil.getToken());
      }

      dispatch({ type: GET_ALL_ORDER_REQUEST });
      let dataUrl = "/api/order/all";
      let response = await axios.get(dataUrl);
      dispatch({ type: GET_ALL_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ALL_ORDER_FAILURE, payload: { error: error } });
    }
  };
};
