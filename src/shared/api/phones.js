import axios from "axios";

const instance = axios.create({
    baseURL: "https://62f782c7ab9f1f8e89fe8bfd.mockapi.io/contacts"
});

export const getPhones = async() => {
    const {data} =  await instance.get("/");
    return data;
}

export const addPhone = async(data) => {
    const {data: result} =  await instance.post("/", data);
    return result;
}

export const removePhones = async(id) => {
    const {data} =  await instance.delete(`/${id}`);
    return data;
}
