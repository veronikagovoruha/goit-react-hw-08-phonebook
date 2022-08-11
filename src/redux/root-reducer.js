import { combineReducers } from "@reduxjs/toolkit";

import phonesReduce from "./phones/PhonesReduce"

const rootReducer = combineReducers({
    phones: phonesReduce,
});

export default rootReducer;