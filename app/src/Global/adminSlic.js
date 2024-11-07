import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: [],
    riders: [],
    orders: [],
    customers: [],
    adminData: [],
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
    setAdminData: (state, action) => {
      state.adminData = action.payload;
    },
    clearAll: (state) => {
      state.admin = [];
      state.riders = [];
      state.orders = [];
      state.customers = [];
      state.adminData = [];
    },
  },
});

export const {
  setAdmin,
  setAllRiders,
  setAllOrders,
  clearAll,
  setAllCustomers,
  setAdminData,
} = AdminSlice.actions;
export default AdminSlice.reducer;
