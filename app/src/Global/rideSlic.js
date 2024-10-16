import { createSlice } from "@reduxjs/toolkit";

const RiderSlice = createSlice({
  name: "rider",
  initialState: {},
  reducers: {
    setRider: (state, action) => {
      state.redier = action.payload;
    },
  },
});

export const { setRider } = RiderSlice.actions;
export default RiderSlice.reducer;
