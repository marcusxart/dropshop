import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    allCustomers: [],
  },
  reducers: {
    setAdmin: (state, action) => {
      state.allCustomers = action.payload;
    },
  },
});

export const { setAdmin } = AdminSlice.actions;
export default AdminSlice.reducer;
