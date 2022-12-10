import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const api = axios.create({
    baseURL:'http://192.168.0.42:8082/maxima-mobile-rest/facadeAppGestaoMaxima'
});

export default api;