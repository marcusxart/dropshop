import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: [],
    riders: [],
    orders: [],
    customers: [],
  },
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    setAllRiders: (state, action) => {
      state.riders = action.payload;
    },
    setAllOrders: (state, action) => {
      state.orders = action.payload;
    },
    setAllCustomers: (state, action) => {
      state.customers = action.payload;
    },
    clearAll: (state) => {
      state.admin = [];
      state.riders = [];
      state.orders = [];
      state.customers = [];
    },
  },
});

export const {
  setAdmin,
  setAllRiders,
  setAllOrders,
  clearAll,
  setAllCustomers,
} = AdminSlice.actions;
export default AdminSlice.reducer;
