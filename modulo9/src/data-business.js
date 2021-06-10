import axios from "axios";

function getData(url) {
    return axios.get(url)
        .then(response => response.data);
}

export {
    getData,
    }