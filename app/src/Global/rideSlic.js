import { createSlice } from "@reduxjs/toolkit";

const RiderSlice = createSlice({
  name: "rider",
  initialState: {
    rider: [],
  },
  reducers: {
    setRider: (state, action) => {
      state.rider = action.payload;
    },
    clearRider: (state) => {
      state.rider = [];
    },
  },
});

export const { setRider, clearRider } = RiderSlice.actions;
export default RiderSlice.reducer;
