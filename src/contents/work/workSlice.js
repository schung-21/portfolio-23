import { createSlice } from "@reduxjs/toolkit";
import { WORK } from '../../app/data';

export const workSlice = createSlice({
    name: 'work',
    initialState: {
        work: WORK
    },
    reducers: {}
});

export default workSlice.reducer;