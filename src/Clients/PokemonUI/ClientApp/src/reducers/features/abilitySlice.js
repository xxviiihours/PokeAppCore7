import { createSlice } from "@reduxjs/toolkit";
import abilityService from "../../services/abilityService";

const initialState = {
  loading: "idle",
  data: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
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
        state.data = { ...initialState.data, ...payload };
        state.loading = "idle";
      }
    },
    clearAbility: (state) =>{
      state = {...initialState}
    }
  },
});

export const fetchABilities =
  (offset = null, limit = null) =>
  async (dispatch) => {
    dispatch(abilityLoading());
    const result = await abilityService.getAbilities(offset, limit);

    console.log(result.data);
    dispatch(storeAbility(result.data));
  };

export const fetchAbilityByQuery = (query) => async (dispatch) => {
  dispatch(abilityLoading());
  const result = await abilityService.getAbilityByQuery(query);

  dispatch(storeAbility(result.data));
};

export const { abilityLoading, storeAbility, clearAbility } = abilitySlice.actions;

export default abilitySlice.reducer;
