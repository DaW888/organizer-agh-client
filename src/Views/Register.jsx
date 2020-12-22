import React, { useState } from 'react';
import { FormWrapper, RegisterContainer } from '../Styled/Sites/Register';
import * as api from '../api/apis';
import { ErrorMessageWrapper } from '../Styled/Global/Errors';

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [error, setError] = useState('');

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
        </RegisterContainer>
    );
};

export default Register;
