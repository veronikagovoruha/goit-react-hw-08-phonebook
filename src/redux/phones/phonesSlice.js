import { createSlice } from "@reduxjs/toolkit";

import {fetchPhones, addPhone, removePhones} from "./phonesOperation"

const initState = {
  items: [],
  loading: false,
  error: null,
  filter: ""
}

const phonesSlice = createSlice({
  name: "contacts",
  initialState: initState,
  reducers: {
    changeFilter: (store, { payload }) => ({
      ...store,
      filter: payload
    }),
  },
  extraReducers: {
    [fetchPhones.pending]: (store) => {
      return {...store, loading: true, error: null}
    },
    [fetchPhones.fulfilled]: (store, {payload}) => {
      store.items = payload;
      store.loading = false;
    },
    [fetchPhones.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),

    [addPhone.pending]:(store) => ({...store, loading: true, error: null}),
    [addPhone.fulfilled]: (store, {payload}) => {
      store.items.push(payload);
      store.loading = false;
    },
    [addPhone.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),

    [removePhones.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [removePhones.fulfilled]: (store, {payload}) => {
      store.items = store.items.filter(item => item.id !== payload.id);
      store.loading = false;
    },
    [removePhones.rejected]: (store, {payload}) => {
      store.loading = false;
      store.error = payload;
    }, 
  }
});

export const { changeFilter } = phonesSlice.actions;

export default phonesSlice.reducer;