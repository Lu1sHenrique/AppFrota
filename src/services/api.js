import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const api = axios.create({
    baseURL:'http://192.168.1.111:8082/maxima-mobile-rest/facadeTecV3'
});

export default api;