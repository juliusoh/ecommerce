import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecommerce-api.juliusoh.com',
});

export default api;