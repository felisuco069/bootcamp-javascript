import Axios from "axios";

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementList = (id) => Axios.get(`${url}/?accountId=${id}`).then(({ data }) => data);

const url2 = `${process.env.BASE_API_URL}/account-list`;

export const getAccountList = (id) => Axios.get(`${url2}/${id}`).then(response => {
    return response.data;
})
