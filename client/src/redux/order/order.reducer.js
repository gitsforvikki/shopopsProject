import * as orderActions from "./order.actions";

export const orderFeatureKey = "ordersInfo";

let initialState = {
  loading: false,
  allOrders: [],
  orderPlcaced: {},
  cartItems: [],
  errorMessage: "",
};

//reducer function
export const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case orderActions.ADD_TO_CART:
      let isExist = state.cartItems.find(
        (item) => item._id === payload.item._id
      );
      if (isExist) return state;
      return {
        ...state,
        cartItems: [...state.cartItems, payload.item],
      };
    case orderActions.ADD_TO_CART_FAILURE:
      return {
        ...state,
        errorMessage: payload.error,
      };

    //increment qty
    case orderActions.INCR_QTY:
      let updatedCartItemsINCR = state.cartItems.map((item) => {
        if (item._id === payload.productId) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: [...updatedCartItemsINCR],
      };
    case orderActions.INCR_QTY_FAILURE:
      return {
        ...state,
        errorMessage: payload.error,
      };

    //decrement qty
    case orderActions.DECR_QTY:
      let updatedCartItemsDECR = state.cartItems.map((item) => {
        if (item._id === payload.productId) {
          return {
            ...item,
            qty: item.qty <= 1 ? item.qty : item.qty - 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: [...updatedCartItemsDECR],
      };
    case orderActions.DECR_QTY_FAILURE:
      return {
        ...state,
        errorMessage: payload.error,
      };

    //deletet cart items
    case orderActions.DELETE_CART_ITEM:
      let updatedCartItemsDELET = state.cartItems.filter((item) => {
        return item._id !== payload.productId;
      });
      return {
        ...state,
        cartItems: [...updatedCartItemsDELET],
      };
    case orderActions.DELETE_CART_ITEM_FAILURE:
      return {
        ...state,
        errorMessage: payload.error,
      };

    //============ clear cart item ============
    case orderActions.CLEAR_CART_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    case orderActions.CLEAR_CART_ITEMS_FAILURE:
      return {
        ...state,
        errorMessage: payload.error,
      };

    // ========= order place ================
    case orderActions.ORDER_PLACE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case orderActions.ORDER_PLACE_SUCCESS:
      return {
        ...state,
        loading: false,
        orderPlcaced: payload.order,
        cartItems: [],
      };
    case orderActions.ORDER_PLACE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    // ============ get all orders==========
    case orderActions.GET_ALL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case orderActions.GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        loading: true,
        allOrders: payload.orders,
      };

    case orderActions.GET_ALL_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    default:
      return state;
  }
};
