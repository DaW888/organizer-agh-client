import React, { useState } from 'react';
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

    const [foods, setFoods] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    const getFoods = async () => {
        try {
            const data = await api.getFoods();
            console.log(data);
            setFoods(data);
            setFetchError(null);
        } catch (err) {
            setFetchError(err.message);
        }
    };

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
            <div>
                <button onClick={() => getFoods()}>GET DATAS</button>
                <ul>
                    {foods.map((dat, i) => (
                        <li key={i}>{dat.description}</li>
                    ))}
                </ul>
            </div>
            <div>{fetchError}</div>
            <Link to="/register">Zarejestruj</Link>
        </LoginContainer>
    );
};

export default Login;
