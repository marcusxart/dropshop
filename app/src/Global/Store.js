import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Default localStorage for web
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
// import RiderReducer from "./riderslice";
import CustomerReducer from "./customerSlice";
import AdminReducer from "./adminSlic";
import RiderReducer from "./rideSlic";
import OrderStatusReducer from "./Orderstatus";
// Configure the persist object
const persistConfig = {
  key: "root",
  storage,
};

// Combine all slices into a root reducer
const rootReducer = combineReducers({
  customer: CustomerReducer,
  admin: AdminReducer,
  rider: RiderReducer,
  OrderStatus: OrderStatusReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create and export the store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer, // use persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // to avoid issues with non-serializable actions from redux-persist
    }),
});

// Create and export the persistor
export const persistor = persistStore(store);
