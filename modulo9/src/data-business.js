import axios from "axios";

function getData() {
    return axios.get("https://www.breakingbadapi.com/api/characters")
        .then(response => response.data);
}

export {
    getData,
}