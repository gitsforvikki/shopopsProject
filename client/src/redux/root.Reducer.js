import { combineReducers } from "@reduxjs/toolkit";
import * as userReducer from "../redux/user/user.reducer";
import * as productReducer from "../redux/product/product.reducer";
import * as orderReducer from "../redux/order/order.reducer";

export const rootReducer = combineReducers({
  [userReducer.userFeaturesKey]: userReducer.reducer,
  [productReducer.productFeatureKey]: productReducer.reducer,
  [orderReducer.orderFeatureKey]: orderReducer.reducer,
});
