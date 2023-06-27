import { configureStore } from "@reduxjs/toolkit";
import provinsiReducers from "../features/ProvinsiSlice";


const store = configureStore({
    reducer: {
        provinces: provinsiReducers,
    }
})

export default store;