import React, { useState } from 'react';
import { FormWrapper, RegisterContainer } from '../Styled/Sites/Register';

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmitRegister = e => {
        e.preventDefault();
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
        </RegisterContainer>
    );
};

export default Register;
