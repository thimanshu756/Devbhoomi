import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

export const store = configureStore({
    reducer : {
        "key to identify slice" : "slice file",
        auth : authSlice,
    },
});