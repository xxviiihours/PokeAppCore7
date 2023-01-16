import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  showSidebar: true,
  unfoldSidebar: false,
};

const userIntefaceSlice = createSlice({
  name: "state-ui",
  initialState: initialState,
  reducers: {
    changeState: (state, { payload }) => {
      switch (payload.type) {
        case "set":
          return { ...state, ...payload };
        default:
          return state;
      }
    },
  },
});


export const {changeState} = userIntefaceSlice.actions;

export default userIntefaceSlice.reducer;

// const changeState = (state = initialState, { payload }) => {
//   console.log(payload)
//   // switch (type) {
//   //   case "set":
//   //     return { ...state, ...rest };
//   //   default:
//   //     return state;
//   // }
//   return state;
// };
