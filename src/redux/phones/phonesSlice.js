import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const getPhones = () => {
  return JSON.parse(localStorage.getItem("phones"));
}

const savePhones = (items) => {
  localStorage.setItem("phones", JSON.stringify(items));
}

const initState = {
  items: getPhones() || [],
  filter: ""
}

const phonesSlice = createSlice({
  name: "contacts",
  initialState: initState,
  reducers: {
    addPhone: {
      reducer({items}, { payload }) {
        items.push(payload);
        savePhones(items);
      },
      prepare(data) {
        return {
          payload: { ...data, id: nanoid() },
        };
      },
    },
    removePhone: (state, { payload }) => {
      const items = [...state.items.filter((el) => el.id !== payload)];
      savePhones(items);
      return {
        ...state,
        items
      }
    },
    changeFilter: (store, { payload }) => ({
      ...store,
      filter: payload
    }),
  },
});

export const { addPhone, removePhone, changeFilter } = phonesSlice.actions;

export default phonesSlice.reducer;