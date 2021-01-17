import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
    transition: ${({ theme }) => theme.transition};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const FormWrapper = styled.form`
    transition: ${({ theme }) => theme.transition};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AghHeader = styled.h3`
    transition: ${({ theme }) => theme.transition};
    position: absolute;
    font-size: 22px;
    top: 0;
    left: 0;
    color: ${({ theme }) => theme.textColor};
    font-family: Proza Libre, sans-serif;
    margin: 40px 0 0 50px;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        flex-direction: column;
        margin: 15px 0 0 15px;
        font-size: 14px;
    }
`;

export const Main = styled.main`
    transition: ${({ theme }) => theme.transition};
    width: 100%;
    margin: 80px 100px 80px 100px;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        margin: 25px 25px 25px 25px;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    transition: ${({ theme }) => theme.transition};
    margin: 0;
    max-font-size: 60px;
    font-size: 4vw;
    color: ${({ theme }) => theme.textSoftColor};
    font-family: Nunito, serif;
    font-weight: 300;
    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        width: 80%;
        text-align: center;
        font-size: 8vw;
    }
`;

export const Illustration = styled.img`
    max-width: 800px;
    width: 40vw;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        width: 80vw;
        margin-bottom: 48px;
    }
`;

export const InputText = styled.input`
    transition: ${({ theme }) => theme.transition};
    font-family: Open Sans, sans-serif;
    font-weight: 300;
    font-size: 24px;
    background-color: ${({ theme }) => theme.bgMainColor};
    color: ${({ theme }) => theme.textSoftColor};
    border: none;
    margin: 0 0 26px 0;
    max-height: 64px;
    max-width: 450px;
    height: 6vh;
    width: 30vw;
    box-shadow: ${({ theme }) => theme.login.boxShadowInput};
    border-radius: 40px;
    padding: 0 22px 0 22px;
    text-align: ${({ center }) => (center ? 'center' : 'left')};

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        margin: 0 0 12px 0;
        max-height: 42px;
        max-width: 280px;
        width: 90vw;
        height: 10vh;
        font-size: 16px;
        box-shadow: ${({ theme }) => theme.login.boxShadowInputSmall};
    }
`;
export const InputButton = styled.input`
    transition: ${({ theme }) => theme.transition};
    margin-top: 26px;
    font-family: Open Sans, serif;
    font-weight: 600;
    font-size: 22px;
    color: ${({ theme }) => theme.textSoftColor};
    background-color: ${({ theme }) => theme.bgMainColor};
    border: none;
    max-width: 225px;
    max-height: 52px;
    width: 15vw;
    height: 6vh;
    box-shadow: ${({ theme }) => theme.login.boxShadowButton};
    border-radius: 60px;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        margin-top: 12px;
        max-height: 36px;
        max-width: 160px;
        width: 70vw;
        height: 10vh;
        font-size: 14px;
        box-shadow: ${({ theme }) => theme.login.boxShadowButtonSmall};
    }
`;

export const StyledLink = styled(Link)`
    margin-top: 20px;
    font-family: Open Sans, serif;
    font-weight: 600;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.accentOrange};
    font-size: 20px;
    text-decoration: none;
    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        font-size: 14px;
    }
`;
