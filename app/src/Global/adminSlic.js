import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: [],
    riders: [],
    orders: [],
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
    clearAll: (state) => {
      state.admin = [];
      state.riders = [];
      state.orders = [];
    },
  },
});

export const { setAdmin, setAllRiders, setAllOrders, clearAll } =
  AdminSlice.actions;
export default AdminSlice.reducer;
