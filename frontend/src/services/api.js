import axios from 'axios';

const PORT = 4000;
const address = "localhost";

const api = axios.create({
    baseURL: `http://${address}:${PORT}`,
});

export default api;