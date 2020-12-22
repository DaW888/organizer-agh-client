import React, { useEffect, useState } from 'react';
import { FormWrapper, RegisterContainer } from '../Styled/Sites/Register';
import * as api from '../api/apis';
import { ErrorMessageWrapper } from '../Styled/Global/Errors';
import { Link, useHistory } from 'react-router-dom';
import { useStore } from '../SweetState/store';

const Register = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [error, setError] = useState('');

    const [, actionsStore] = useStore();

    const handleSubmitRegister = async e => {
        e.preventDefault();
        try {
            const data = await api.register({ email, pass, name, surname });
            console.log(data);
        } catch (err) {
            console.log(err.response.status);
            if (err.response.status === 409) {
                console.log('taki user już istnieje');
                setError('taki user już istnieje');
            }
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
        <RegisterContainer>
            <FormWrapper onSubmit={handleSubmitRegister}>
                <input
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    required
                    type="password"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    placeholder="Password"
                />
                <input
                    required
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    required
                    type="text"
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                    placeholder="Surname"
                />
                <input type="submit" value="Register" />
            </FormWrapper>
            <ErrorMessageWrapper>{error}</ErrorMessageWrapper>
            <Link to="/login">Zaloguj</Link>
        </RegisterContainer>
    );
};

export default Register;
