import { createSlice } from "@reduxjs/toolkit";

const RiderSlice = createSlice({
  name: "rider",
  initialState: {
    rider: [],
    riderOrders: [],
    riderOngoingOrdering: [],
    riderStatus: [],
  },
  reducers: {
    setRider: (state, action) => {
      state.rider = action.payload;
    },
    setRiderOrders: (state, action) => {
      state.riderOrders = action.payload;
    },
    setRiderOngoingOrdering: (state, action) => {
      state.riderOngoingOrdering = action.payload;
    },
    setRiderStatus: (state, action) => {
      state.riderStatus = action.payload;
    },
    clearRider: (state) => {
      state.rider = [];
      state.riderOrders = [];
      state.riderOngoingOrdering = [];
    },
  },
});

export const {
  setRider,
  clearRider,
  setRiderOrders,
  setRiderOngoingOrdering,
  setRiderStatus,
} = RiderSlice.actions;
export default RiderSlice.reducer;
