import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const phonesSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    add: {
      reducer(store, { payload }) {
        store.push(payload);
      },
      prepare(data) {
        return {
          payload: { ...data, id: nanoid() },
        };
      },
    },
    remove: (store, { payload }) => [
      ...store.filter((el) => el.id !== payload),
    ],
  },
});

export const { add, remove } = phonesSlice.actions;

export default phonesSlice.reducer;