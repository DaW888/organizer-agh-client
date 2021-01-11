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

export const changeUserGroups = async userIdAndGroups => {
    const { data } = await axios.post(`/api/changeUserGroups`, userIdAndGroups);
    return data;
};

export const updateUserPassword = async userData => {
    const { data } = await axios.post(`/api/updateUserPassword`, userData);
    return data;
};

export const addEvent = async event => {
    const { data } = await axios.post(`/api/addEvent`, event);
    return data;
};

export const getEvents = async groups => {
    const { data } = await axios.post(`/api/getEvents`, groups);
    return data;
};
