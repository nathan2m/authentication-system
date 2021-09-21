import axios from 'axios';

const PORT = 4000;
const address = '192.168.0.2'; //'localhost';

const api = axios.create({
  baseURL: `http://${address}:${PORT}`,
});

export default api;
