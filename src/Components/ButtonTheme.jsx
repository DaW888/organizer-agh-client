import React from 'react';
import { useStore } from '../SweetState/store';
import styled from 'styled-components';

const Button = styled.button`
    transition: ${({ theme }) => theme.transition};
    width: 30px;
    height: 30px;
    border: 2px solid #929292;
    background-color: ${({ theme }) => theme.textColor};
    border-radius: 20px;
    position: absolute;
    right: 20px;
    top: 20px;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        right: 10px;
        top: 10px;
        width: 20px;
        height: 20px;
    }
`;

const ButtonTheme = () => {
    const [, actionsStore] = useStore();

    return <Button onClick={() => actionsStore.changeTheme()} />;
};

export default ButtonTheme;
