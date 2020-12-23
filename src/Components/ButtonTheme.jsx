import React from 'react';
import { useStore } from '../SweetState/store';
import styled from 'styled-components';

const Button = styled.button`
    transition: ${({ theme }) => theme.transition};
    width: 30px;
    height: 30px;
    border: 2px solid #fafa9c;
    background-color: ${({ theme }) => theme.textColor};
    border-radius: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
`;

const ButtonTheme = () => {
    const [, actionsStore] = useStore();

    return <Button onClick={() => actionsStore.changeTheme()} />;
};

export default ButtonTheme;
