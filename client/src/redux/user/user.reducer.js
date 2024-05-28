import * as userActions from "./user.action";

export const userFeaturesKey = "userInfo";

let initialState = {
  loading: false,
  user: {},
  token: "",
  isAuthentiated: false,
  errorMessage: "",
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //register user
    case userActions.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case userActions.REGISTER_USER_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    //login user
    case userActions.LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.LOGIN_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        token: payload.token,
        isAuthentiated: true,
      };
    case userActions.LOGIN_USER_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        token: "",
        isAuthentiated: false,
        errorMessage: payload.error,
      };

    //get User
    case userActions.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
      };
    case userActions.GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    //update address
    case userActions.UPDATE_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
      };
    case userActions.UPDATE_ADDRESS_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    //logout user
    case userActions.LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: true,
        isAuthentiated: false,
        token: "",
      };

    case userActions.LOGOUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload.error,
      };

    default:
      return state;
  }
};
