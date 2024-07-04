import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Investiment {
  key: string;
  value: number;
  longName: string;
  logo: string;
}

interface InvestimentInitial {
  key: string;
  longName: string;
  logo: string;
}

interface InvestimentWithHistoric extends Investiment {
  historic: number[];
}

interface InvestimentsState {
  investiments: InvestimentWithHistoric[];
  len: number;
}

const initialState: InvestimentsState = {
  investiments: [],
  len: 0,
};

export type valueof<T> = T[keyof T];

export const investiments = createSlice({
  name: "investiments",
  initialState,
  reducers: {
    handleInvestiment: (state, action: PayloadAction<Investiment>) => {
      const {
        payload: { key, value, longName, logo },
      } = action;

      const investiment = state.investiments.find(
        (investiment) => investiment.key === key
      );

      if (!investiment) {
        state.investiments.push({
          key,
          value,
          historic: [value],
          longName,
          logo,
        });
        state.len += 1;
      } else {
        if (investiment.value !== value) {
          investiment.historic.push(value);
          investiment.value = value;
        }
      }
    },
    handleInvestiments: (
      state,
      action: PayloadAction<InvestimentInitial[]>
    ) => {
      state.investiments = action.payload.map((investiment) => ({
        ...investiment,
        value: 0,
        historic: [0],
      }));
    },
  },
});

export const { handleInvestiment, handleInvestiments } = investiments.actions;

export default investiments.reducer;
