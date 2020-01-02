import axios from 'axios';

export const API = axios.create({
    baseURL: `https://truecaller.blog/wp-json/wp/v2/`
})