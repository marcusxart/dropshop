import { createSlice } from "@reduxjs/toolkit";

const CustomerSlice = createSlice({
  name: "customer",
  initialState: {
    Customer: [],
    orders: [],
  },
  reducers: {
    setCustomer: (state, action) => {
      state.Customer = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { setCustomer, setOrders } = CustomerSlice.actions;
export default CustomerSlice.reducer;
