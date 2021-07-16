import Axios from "axios";

const url = `${process.env.BASE_API_URL}/account-list`;

export const getAccountList = (id) =>
    Axios.get(url).then(response => {
        return response.data;
    })