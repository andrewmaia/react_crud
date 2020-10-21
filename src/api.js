import axios from 'axios';

const api= axios.create({
    //Api baseada em Elastic Search
    baseURL: 'http://localhost:4000'
});

export default api;