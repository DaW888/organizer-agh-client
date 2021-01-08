import React, { useEffect, useState } from 'react';
import * as api from '../api/apis';
import { ErrorMessageWrapper } from '../Styled/Global/Errors';
import { useHistory } from 'react-router-dom';
import { useStore } from '../SweetState/store';
import {
    LoginContainer,
    FormWrapper,
    AghHeader,
    Title,
    Main,
    Illustration,
    InputText,
    InputButton,
    StyledLink,
} from '../Styled/Sites/Login';
import projectIllustration from '../assets/illustrations/projectIllustration.svg';
import ButtonTheme from '../Components/ButtonTheme';

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
            history.push('/login');
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
        <LoginContainer>
            <ButtonTheme />
            <AghHeader>AGH Organizer</AghHeader>
            <Title>Create account to start your journey</Title>
            <Main>
                <Illustration
                    src={projectIllustration}
                    alt="projectIllustration"
                />
                <FormWrapper onSubmit={handleSubmitRegister}>
                    <InputText
                        required
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                    />
                    <InputText
                        required
                        type="text"
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        placeholder="Last Name"
                    />
                    <InputText
                        required
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <InputText
                        required
                        type="password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                        placeholder="Password"
                    />
                    <ErrorMessageWrapper>{error}</ErrorMessageWrapper>
                    <InputButton type="submit" value="Register" />
                    <StyledLink to="/login">Login</StyledLink>
                </FormWrapper>
            </Main>
        </LoginContainer>
    );
};

export default Register;
