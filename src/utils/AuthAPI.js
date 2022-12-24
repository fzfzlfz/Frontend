import axios from 'axios';
import {authHeader} from './AuthUtils';


export const login = (email, password) => axios.get(`/login?email=${email}&password=${password}`, {}, {headers: authHeader()});

export const register = (email, password) => axios.post(`/register?email=${email}&password=${password}`, {}, {headers: authHeader()});

export const changePic = (id, link) => axios.get(`/changePic?id=${id}&link=${link}`, {}, {headers: authHeader()});

export const changePsw = (body) => axios.post('/changePsw',body, {headers: authHeader()});

export const addClaim = (body) => axios.post(`/addClaim`, body, {headers: authHeader()});

export const buyInsurance = (body) => axios.post(`/buyInsurance`, body, {headers: authHeader()});

export const getPrice = (body) => axios.post(`/getPrice`, body, {headers: authHeader()});

export const getInsurance = () => axios.get('/getInsurance',{}, {headers: authHeader()});

export const getClaim = () => axios.get('/getClaim',{}, {headers: authHeader()});
