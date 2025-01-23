import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/CartSlice";
import AuthApi from "./Features/Auth/AuthApi";

import AuthReducer from "./Features/Auth/AuthSlice";
import ProductsApi from "./Features/Products/ProductsApi";
import ReviewApi from "./Features/Reviews/ReviewsApi";
import StatsApi from "./Features/Stats/StatsApi";
import OrderApi from "./Features/Orders/OrderApi.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    auth: AuthReducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    [ReviewApi.reducerPath]: ReviewApi.reducer,
    [StatsApi.reducerPath]: StatsApi.reducer,
    [OrderApi.reducerPath]: OrderApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthApi.middleware,
      ProductsApi.middleware,
      ReviewApi.middleware,
      StatsApi.middleware,
      OrderApi.middleware
    ),
});
