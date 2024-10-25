import { createSlice } from "@reduxjs/toolkit";

const RiderSlice = createSlice({
  name: "rider",
  initialState: {
    rider: [],
    riderOrders: [],
  },
  reducers: {
    setRider: (state, action) => {
      state.rider = action.payload;
    },
    setRiderOrders: (state, action) => {
      state.riderOrders = action.payload;
    },
    clearRider: (state) => {
      state.rider = [];
    },
  },
});

export const { setRider, clearRider, setRiderOrders } = RiderSlice.actions;
export default RiderSlice.reducer;
