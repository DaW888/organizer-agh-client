import styled from 'styled-components';

export const MainWrapper = styled.div`
    margin: 58px 20px 0 20px;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        flex-direction: column;
        margin: 0;
        align-items: center;
    }
`;
export const ColumnsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const CenterWrapper = styled.div`
    display: flex;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        margin-top: 14px;
    }
`;

export const LeftSideWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: sticky;
    z-index: 2;
    top: 20px;
    transition: ${({ theme }) => theme.transition};
    border-radius: 100vw;
    box-shadow: ${({ theme }) => theme.main.columns.boxShadowColumn};
    padding: 0;
    width: 80px;
    background-color: ${({ theme }) => theme.bgMainColor};
    height: 86vh;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        width: 86vw;
        height: 60px;
        margin: 12px 0 12px 0;
        flex-direction: row;
    }
`;
export const RightSideWrapper = styled.aside`
    position: sticky;
    top: 20px;
    padding: 0;
    width: 400px;
    height: 86vh;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        margin: 12px 0 12px 0;
    }
`;

export const IconButtonWrapper = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
        width: 36px;
        height: 36px;

        path {
            fill: ${({ theme }) => theme.textSoftColor};
        }
    }
`;
