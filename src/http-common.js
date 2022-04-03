import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:7000/api/v1/pro/",
    headers: {
        "Content-type": "application/json"
    }
});