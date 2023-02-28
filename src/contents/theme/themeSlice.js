import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        dark: false
    },
    reducers: {
        toggle: (state) => {
            state.dark = !state.dark;
        }
    }
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;