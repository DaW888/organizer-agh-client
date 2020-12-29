import React, { useEffect, useState } from 'react';
import * as api from '../api/apis';
import {
    AghHeader,
    FormWrapper,
    Illustration,
    InputButton,
    InputText,
    LoginContainer,
    Main,
    StyledLink,
    Title,
} from '../Styled/Sites/Login';
import { useHistory } from 'react-router-dom';
import { useStore } from '../SweetState/store';

import projectIllustration from '../assets/illustrations/projectIllustration.svg';

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
            <AghHeader>AGH Organizer</AghHeader>
            <Title>All your events in one place</Title>
            <Main>
                <Illustration
                    src={projectIllustration}
                    alt="projectIllustration"
                />
                <FormWrapper onSubmit={handleSubmitLogin}>
                    <InputText
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <InputText
                        placeholder="Password"
                        type="password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                    />
                    <InputButton type="submit" value="Login" />
                    <StyledLink to="/register">Register</StyledLink>
                </FormWrapper>
            </Main>
        </LoginContainer>
    );
};

export default Login;
