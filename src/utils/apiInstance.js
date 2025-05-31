import axios from "axios"

export const apiInstance = axios.create({
    baseURL: "http://localhost:3002",
    headers: {
        "Content-Type": "application/json"
    }
})