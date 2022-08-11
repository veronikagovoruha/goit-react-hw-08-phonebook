import { combineReducers } from "@reduxjs/toolkit";

import itemsReducer from "./phone-item/phones-reducer-slice";
import filterReducer from "./phone-filter/phones-filter-reducer-slice";

const phonesReduce = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default phonesReduce;