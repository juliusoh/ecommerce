import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.ecommerce.juliusoh.com',
});

export default api;