import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.0.8:8082/maxima-mobile-rest/facadeTecV3'
});
export default api;