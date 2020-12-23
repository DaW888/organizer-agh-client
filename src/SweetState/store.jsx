import { createStore, createHook } from 'react-sweet-state';
import * as api from '../api/apis';

const actions = {
    changeTheme: () => ({ setState, getState }) => {
        setState({
            isLightTheme: !getState().isLightTheme,
        });
    },

    login: data => ({ setState }) => {
        setState({
            user: {
                email: data.email,
                id: data._id,
                name: data.name,
                surname: data.surname,
            },
        });
    },

    logout: () => async ({ setState }) => {
        await api.removeToken();
        setState({
            user: null,
        });
    },
};

const Store = createStore({
    initialState: {
        user: null,
        isLightTheme: true,
    },
    actions,
    name: 'store',
});

export const useStore = createHook(Store);
