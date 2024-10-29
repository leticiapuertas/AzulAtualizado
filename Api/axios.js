import axios from "axios";

export const apiConfig = axios.create({
    baseURL: 'http://192.168.1.85:3000',
    headers: {
      'Content-Type': 'application/json',
    },
});