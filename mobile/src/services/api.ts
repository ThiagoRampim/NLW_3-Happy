import axios from 'axios';

const api = axios.create({
    baseURL: 'http://801d2ed04e7c.ngrok.io',
})

export default api