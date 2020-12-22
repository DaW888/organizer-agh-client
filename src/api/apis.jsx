import axios from 'axios';

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export const getFoods = async () => {
    const { data } = await axios.get(`/api/foods`);
    return data;
};

export const login = async userData => {
    const { data } = await axios.post(`/api/login`, userData);
    return data;
};

export const register = async userData => {
    const { data } = await axios.post(`/api/register`, userData);
    return data;
};
