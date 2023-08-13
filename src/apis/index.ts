import axios from 'axios';
import EnvConfig from './EnvConfig';

const API = axios.create({
    baseURL:'https://server.gmuwiki.com/',
    withCredentials: true
});

export default API;