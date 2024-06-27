import axios from "axios";

const API_URL = "http://localhost:8080/user";

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
}

export const register = async (email: string, password: string, name: string, surname: string, username: string) => {
    const response = await axios.post(`${API_URL}/register`, { email, password, name, surname, username });
    return response.data;
}