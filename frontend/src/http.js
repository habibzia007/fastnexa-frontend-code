import axios from "axios";

export default axios.create({
    baseURL: "https://cms.fastnexa.com/api",
    headers: {
        "Content-type": "application/json",
    },
})