import * as api from "../../shared/api/phones";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhones = createAsyncThunk(
    "contacts",
    async(_, thunkApi) => {
        try {
            return await api.getPhones();
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const addPhone = createAsyncThunk(
    "phones/add",
    async(data, {rejectWithValue}) => {
        try {
            return await api.addPhone(data);
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, {getState}) => {
            const {phones} = getState();
            const {name} = data;
            const isDublicate = phones.items.find(item => item.name.toLowerCase() === data.name.toLowerCase() );
            if(isDublicate){
                alert(`${name} is already exist`);
                return false;
            }
        }
    }
)

export const removePhones = createAsyncThunk(
    "phones/remove",
    async(id, {rejectWithValue}) => {
        try {
            return await api.removePhones(id);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
