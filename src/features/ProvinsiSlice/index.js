import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces"

const provinsiSlice = createSlice({
    name: "Provinsi Slice",
    initialState: {
        provinces: data.provinces,
    },
    reducers: {
        setProvinces(state, action) {
            state.provinces = action.payload;
        },
    },
});

const { setProvinces } = provinsiSlice.actions;
const provinsiReducers = provinsiSlice.reducer;

export default provinsiReducers;
export {setProvinces};