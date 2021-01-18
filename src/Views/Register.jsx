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

    const [, actionsStore] = useStore();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [error, setError] = useState('');
    const [isCreated, setIsCreated] = useState(false);
    const [authCode, setAuthCode] = useState('');

    const handleSubmitRegister = async e => {
        e.preventDefault();
        try {
            const data = await api.register({ email, pass, name, surname });
            setIsCreated(true);
            // history.push('/login');
            console.log(data);
        } catch (err) {
            console.log(err.response.status);
            if (err.response.status === 409) {
                console.log('taki user już istnieje');
                setError('taki user już istnieje');
            }
        }
    };

    const handleConfirmCode = async e => {
        e.preventDefault();
        try {
            const code = parseInt(authCode);
            const res = await api.checkAuthCode({ code, email });
            console.log(res);
            history.push('/login');
        } catch (err) {
            console.log(err.response.data);
            setError(err.response.data.message);
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

    const parseCode = code => {
        const re = /^\d{0,5}$/;
        if (re.test(code)) {
            setAuthCode(code);
        }
    };

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
                {isCreated ? (
                    <FormWrapper onSubmit={handleConfirmCode}>
                        <InputText
                            center
                            required
                            type="text"
                            value={authCode}
                            onChange={e => parseCode(e.target.value)}
                            placeholder="CODE"
                        />
                        <InputButton type="submit" value="Confirm Code" />
                        <ErrorMessageWrapper>{error}</ErrorMessageWrapper>
                    </FormWrapper>
                ) : (
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
                )}
            </Main>
        </LoginContainer>
    );
};

export default Register;
