import { createSlice } from "@reduxjs/toolkit";
import abilityService from "../../services/abilityService";

const initialState = {
  loading: "idle",
  data: null,
};

const abilitySlice = createSlice({
  name: "ability",
  initialState: initialState,
  reducers: {
    abilityLoading: (state, { payload }) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    storeAbility: (state, { payload }) => {
      if (state.loading === "pending") {
        state.data = { ...payload };
        state.loading = "idle";
      }
    },
  },
});

export const fetchABilities = (offset = null, limit = null) => async (dispatch) => {
  dispatch(abilityLoading());
  const result = await abilityService.getAbilities(offset, limit);

  console.log(result.data)
  dispatch(storeAbility(result.data));
};
// const fetchAbilityByQuery = (query) => async (dispatch) => {
//   dispatch(abilityLoading())
//   const result = await abilityService.getAbilityByQuery(query);

//   dispatch(storeAbility(result.data))
// }

export const { storeAbility, abilityLoading } = abilitySlice.actions;

export default abilitySlice.reducer;
