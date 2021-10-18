import axios from 'axios';

const api = axios.create({
    baseURL: 'http://18.211.227.35:5000/api/',
});

export default api;