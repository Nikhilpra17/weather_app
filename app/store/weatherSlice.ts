"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  location: string;
  data: any;
}

const initialState: WeatherState = {
  location: "",
  data: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setWeatherData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
  },
});

export const { setLocation, setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
