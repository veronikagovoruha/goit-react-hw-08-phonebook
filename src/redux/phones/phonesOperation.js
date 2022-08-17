import * as api from "../../shared/api/phones";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhones = createAsyncThunk(
    "contacts",
    async(_, {rejectWithValue}) => {
        try {
            return await api.getPhones();
        } catch (error) {
            const {data, status} = error.response;
            return rejectWithValue({data, status});
        }
    }
)

export const addPhone = createAsyncThunk(
    "phones/add",
    async(data, {rejectWithValue}) => {
        try {
            return await api.addPhone(data);
        } catch (error) {
            const {data, status} = error.response;
            return rejectWithValue({data, status});
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
            await api.removePhones(id);
            return id;
        } catch (error) {
            const {data, status} = error.response;
            return rejectWithValue({data, status});
        }
    }
)
