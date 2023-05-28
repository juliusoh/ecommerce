import axios from 'axios';

const api = axios.create({
  baseURL: 'ecommerce.juliusoh.com',
});

export default api;