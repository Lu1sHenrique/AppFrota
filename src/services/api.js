import axios from 'axios';

const api = axios.create({
    baseURL:'https://api-teste-app-frota.herokuapp.com'
    //baseURL:'http://192.168.1.131:3000'
}); 
export default api;