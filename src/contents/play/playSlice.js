import { createSlice } from "@reduxjs/toolkit";
import { PLAY } from "../../app/data";

export const playSlice = createSlice({
    name: 'play',
    initialState: {
        play: PLAY
    },
    reducers: {}
});

export default playSlice.reducer;