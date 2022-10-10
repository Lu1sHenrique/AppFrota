import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.1.131:8082/maxima-mobile-rest/facadeTecV3',
    headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});
export default api;