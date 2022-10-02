import axios from "axios"

export default instance = axios.create({
    baseURL: "https://some-domain.com/api/",
    headers: { "Content-Type": "application/json" },
})
