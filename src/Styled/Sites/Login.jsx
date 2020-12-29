import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AghHeader = styled.h3`
    position: absolute;
    font-size: 24px;
    top: 0;
    left: 0;
    color: ${({ theme }) => theme.textColor};
    font-family: Proza Libre, sans-serif;
    margin: 80px 0 0 100px;
`;

export const Main = styled.main`
    width: 100%;
    margin: 80px 100px 80px 100px;
    display: flex;
    justify-content: space-evenly;
`;

export const Title = styled.h1`
    margin: 0;
    max-font-size: 60px;
    font-size: 4vw;
    color: ${({ theme }) => theme.textSoftColor};
    font-family: Nunito, serif;
    font-weight: 300;
`;

export const Illustration = styled.img`
    max-width: 800px;
    width: 40vw;
`;

export const InputText = styled.input`
    font-family: Open Sans, serif;
    font-weight: 300;
    font-size: 26px;
    background-color: ${({ theme }) => theme.bgMainColor};
    color: ${({ theme }) => theme.textSoftColor};
    border: none;
    margin: 0 0 26px 0;
    min-height: 64px;
    min-width: 450px;
    box-shadow: inset 6px 6px 10px #d5d9e0, inset -6px -6px 10px #ffffff;
    border-radius: 40px;
    padding: 0 22px 0 22px;
`;
export const InputButton = styled.input`
    margin-top: 26px;
    font-family: Open Sans, serif;
    font-weight: 600;
    font-size: 22px;
    color: ${({ theme }) => theme.textSoftColor};
    background-color: ${({ theme }) => theme.bgMainColor};
    border: none;
    width: 225px;
    height: 52px;
    box-shadow: 6px 6px 10px #d5d9e0, -6px -6px 10px #ffffff;
    border-radius: 60px;
    cursor: pointer;
`;

export const StyledLink = styled(Link)`
    margin-top: 20px;
    font-family: Open Sans, serif;
    font-weight: 600;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.accentOrange};
    font-size: 20px;
    text-decoration: none;
`;
