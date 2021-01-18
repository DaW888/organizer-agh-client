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
import ButtonTheme from '../Components/ButtonTheme';
import { ErrorMessageWrapper } from '../Styled/Global/Errors';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [authCode, setAuthCode] = useState('');
    const [toConfirmedCode, setToConfirmedCode] = useState(false);
    const [error, setError] = useState('');
    const [, actionsStore] = useStore();

    const handleSubmitLogin = async e => {
        e.preventDefault();
        try {
            const res = await api.login({ email, pass });
            actionsStore.login(res.data);
            history.push('/');
        } catch (err) {
            setError(err.response.data.message);
            if (err.response.data.message === 'code not confirmed') {
                setToConfirmedCode(true);
            }
            actionsStore.logout();
            console.log(err);
        }
    };

    const handleConfirmCode = async e => {
        e.preventDefault();
        try {
            const code = parseInt(authCode);
            const res = await api.checkAuthCode({ code, email });
            console.log(res);
            history.push('/');
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const parseCode = code => {
        const re = /^\d{0,5}$/;
        if (re.test(code)) {
            setAuthCode(code);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const data = await api.validateToken();
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
            <Title>All your events in one place</Title>
            <Main>
                <Illustration
                    src={projectIllustration}
                    alt="projectIllustration"
                />

                {toConfirmedCode ? (
                    <FormWrapper onSubmit={handleConfirmCode}>
                        <InputText
                            center
                            required
                            type="text"
                            value={authCode}
                            onChange={e => parseCode(e.target.value)}
                            placeholder="CODE"
                        />
                        <ErrorMessageWrapper>{error}</ErrorMessageWrapper>
                        <InputButton type="submit" value="Confirm Code" />
                    </FormWrapper>
                ) : (
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
                        <ErrorMessageWrapper>{error}</ErrorMessageWrapper>
                        <InputButton type="submit" value="Login" />
                        <StyledLink to="/register">Register</StyledLink>
                    </FormWrapper>
                )}
            </Main>
        </LoginContainer>
    );
};

export default Login;
