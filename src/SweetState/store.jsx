import { createStore, createHook } from 'react-sweet-state';
import * as api from '../api/apis';

const actions = {
    changeTheme: () => ({ setState, getState }) => {
        localStorage.setItem(
            'isLight',
            JSON.stringify(!getState().isLightTheme)
        );
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
                groups: data.groups,
            },
        });
    },

    logout: () => async ({ setState }) => {
        await api.removeToken();
        setState({
            user: null,
        });
    },

    setSelectedDays: dates => ({ setState }) => {
        setState({
            selectedDays: dates,
        });
    },

    updateUserGroups: groups => ({ setState, getState }) => {
        setState({
            user: {
                ...getState().user,
                groups,
            },
        });
    },
};

const Store = createStore({
    initialState: {
        user: null,
        isLightTheme: !!JSON.parse(localStorage.getItem('isLight')),
        selectedDays: [new Date()],
    },
    actions,
    name: 'store',
});

export const useStore = createHook(Store);
