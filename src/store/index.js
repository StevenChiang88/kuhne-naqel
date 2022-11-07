import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authSlice } from "./reducer/authSlice";
import shipmentApi from "./shipmentApi";

const store = configureStore({
  reducer: {
    [shipmentApi.reducerPath]: shipmentApi.reducer, //RTKQ
    auth: authSlice.reducer, //命名影響useSelector的state.auth
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shipmentApi.middleware),
});

setupListeners(store.dispatch); //緩存

export default store;
