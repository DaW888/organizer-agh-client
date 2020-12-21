import React, { useState } from 'react';
import * as api from '../api/apis';
import { FormWrapper, LoginContainer } from '../Styled/Sites/Login';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmitLogin = async e => {
        e.preventDefault();
        console.log(email, pass);
        const res = await api.login({ email, pass });
        console.log(res);
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
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                />
                <input type="submit" value="submit" />
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
        </LoginContainer>
    );
};

export default Login;
