// orderStatusSlice.js
import { createSlice } from "@reduxjs/toolkit";

const orderStatusSlice = createSlice({
  name: "orderStatus",
  initialState: {
    status: null,
    stage: [],
  },
  reducers: {
    setOrderStatus: (state, action) => {
      state.status = action.payload;
    },
    setStage: (state, action) => {
      state.stage = action.payload;
    },
    clearStatus: (state) => {
      state.status = null;
      state.stage = [];
    },
  },
});

export const { setOrderStatus, clearStatus, setStage } =
  orderStatusSlice.actions;
export default orderStatusSlice.reducer;
