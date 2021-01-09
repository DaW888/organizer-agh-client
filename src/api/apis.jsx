import axios from 'axios';

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

export const validateToken = async () => {
    const { data } = await axios.get('/api/validateToken');
    return data;
};

export const removeToken = async () => {
    try {
        await axios.get('/api/removeToken');
    } catch (err) {
        console.log(err);
    }
};

export const getAllGroups = async () => {
    const { data } = await axios.get(`/api/getAllGroups`);
    return data;
};
