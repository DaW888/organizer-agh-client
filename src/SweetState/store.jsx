import { createStore, createHook } from 'react-sweet-state';

const actions = {
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
    logout: () => ({ setState }) => {
        setState({
            user: null,
        });
    },
};

const Store = createStore({
    initialState: {
        user: null,
    },
    actions,
    name: 'store',
});

export const useStore = createHook(Store);
