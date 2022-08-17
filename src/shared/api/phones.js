
import { instance } from "./auth";

export const getPhones = async() => {
    const {data} =  await instance.get("/contacts");
    return data;
}

export const addPhone = async(data) => {
    const {data: result} =  await instance.post("/contacts", data);
    return result;
}

export const removePhones = async(id) => {
    const {data} =  await instance.delete(`/contacts/${id}`);
    return data;
}
