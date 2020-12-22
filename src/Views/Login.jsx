import React, { useEffect, useState } from 'react';
import * as api from '../api/apis';
import { FormWrapper, LoginContainer } from '../Styled/Sites/Login';
import { Link, useHistory } from 'react-router-dom';
import { useStore } from '../SweetState/store';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [, actionsStore] = useStore();

    const handleSubmitLogin = async e => {
        e.preventDefault();
        console.log(email, pass);
        try {
            const res = await api.login({ email, pass });
            actionsStore.login(res.data);
            history.push('/');
            console.log(res);
        } catch (err) {
            actionsStore.logout();
            console.log(err);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const data = await api.validateToken();
                console.log(data);
                if (data.message === 'valid') {
                    actionsStore.login(data.user);
                    history.push('/');
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <LoginContainer>
            <FormWrapper onSubmit={handleSubmitLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                />
                <input type="submit" value="Zaloguj" />
            </FormWrapper>
            <Link to="/register">Zarejestruj</Link>
        </LoginContainer>
    );
};

export default Login;
