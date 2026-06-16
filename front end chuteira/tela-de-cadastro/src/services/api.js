import axios from 'axios';

const api = axios.create({
  baseURL: 'https://elite-boots-store.onrender.com',
});

export default api;