import Axios from "axios";
import { routes } from "../../core/router";

const url = `${process.env.BASE_API_URL}/transfer`;
const url2 = `${process.env.BASE_API_URL}/account`;

export const insertTrasnfer = (account) => Axios.post(`${url}`, account).then(response => {
    return response.data;
});

export const getAccount = id => Axios.get(`${url2}/${id}`).then(response => {
    return response.data;
});
