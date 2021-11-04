import {createSlice} from '@reduxjs/toolkit';

const initialState = {lang: 'en'};
export const langSlice = createSlice({
  name: 'lang',
  initialState: {value: initialState},
  reducers: {
    changeLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {changeLanguage} = langSlice.actions;

export default langSlice.reducer;
