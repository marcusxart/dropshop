import { createSlice } from "@reduxjs/toolkit";

const CustomerSlice = createSlice({
  name: "customer",
  initialState: {
    Customer: [],
    orders: [],
    orderHistory: [],
  },
  reducers: {
    setCustomer: (state, action) => {
      state.Customer = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setHistory: (state, action) => {
      state.orderHistory = action.payload;
    },
    clearCustomers: (state) => {
      state.Customer = [];
      state.orders = [];
    },
  },
});

export const { setCustomer, setOrders, clearCustomers, setHistory } =
  CustomerSlice.actions;
export default CustomerSlice.reducer;
