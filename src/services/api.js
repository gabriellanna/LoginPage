import axios from "axios";

export const api = axios.create({
    baseURL: 'https://localhost:7287/api'
})

export const createSession = async (email, password) => {
    return api.post('/User/Login', { email, password })
}

export const createUser = async (email, password) => {
    return api.post('/User/Register', { email, password })
}