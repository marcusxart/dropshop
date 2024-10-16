import { createSlice } from "@reduxjs/toolkit";

const CustomerSlice = createSlice({
  name: "customer",
  initialState: {},
  reducers: {
    setCustomer: (state, action) => {
      state.CustomerSlice = action.payload;
    },
  },
});

export const { setCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;
