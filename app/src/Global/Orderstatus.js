// orderStatusSlice.js
import { createSlice } from "@reduxjs/toolkit";

const orderStatusSlice = createSlice({
  name: "orderStatus",
  initialState: {
    status: null,
  },
  reducers: {
    setOrderStatus: (state, action) => {
      state.status = action.payload;
    },
    clearStatus: (state) => {
      state.status = null;
    },
  },
});

export const { setOrderStatus, clearStatus } = orderStatusSlice.actions;
export default orderStatusSlice.reducer;
