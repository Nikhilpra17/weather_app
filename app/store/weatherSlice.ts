"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  location: string;
  data: any;
  error: string | null;
}

const initialState: WeatherState = {
  location: "",
  data: null,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
      state.error = null;
    },
    setWeatherData(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const { setLocation, setWeatherData, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
