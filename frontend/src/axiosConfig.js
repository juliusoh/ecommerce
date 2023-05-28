import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecommerce.juliusoh.com',
});

export default api;