import { combineReducers } from "@reduxjs/toolkit";

import phonesReduce from "./phones/phonesSlice"

const rootReducer = combineReducers({
    phones: phonesReduce,
});

export default rootReducer;