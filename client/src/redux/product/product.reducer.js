import * as productActions from "./product.action";

export const productFeatureKey = "products";

let initialState = {
  loading: false,
  products: [],
  selectedProducts: {},
  errorMessage: "",
};

export const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    //get mens products
    case productActions.GET_MENS_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case productActions.GET_MENS_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload.products,
      };

    case productActions.GET_MENS_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    //get womens products
    case productActions.GET_WOMENS_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case productActions.GET_WOMENS_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload.products,
      };

    case productActions.GET_WOMENS_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    //get kids products
    case productActions.GET_KIDS_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case productActions.GET_KIDS_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload.products,
      };

    case productActions.GET_KIDS_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    //get single product
    case productActions.GET_SINGLE_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case productActions.GET_SINGLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedProducts: payload.product,
      };

    case productActions.GET_SINGLE_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    //upload products
    case productActions.UPLOAD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case productActions.UPLOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload.products,
      };

    case productActions.UPLOAD_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };
    default:
      return state;
  }
};
