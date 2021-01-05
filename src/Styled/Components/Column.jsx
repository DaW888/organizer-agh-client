import styled from 'styled-components';

export const ColumnWrapper = styled.div`
    transition: ${({ theme }) => theme.transition};
    margin: 0 16px 16px 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 260px;
    width: 14vw;
    min-width: 160px;
    border-radius: 32px;
    box-shadow: ${({ theme }) => theme.main.columns.boxShadowColumn};
    height: 86vh;
    padding: 8px;
    overflow: auto;

    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        margin: 0 4px 20px 4px;
    }
`;

export const HeaderWrapper = styled.div`
    width: 110%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    position: sticky;
    top: -20px;
    padding-bottom: 12px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.bgMainColor};
`;

export const TitleWrapper = styled.h2`
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.textColor};
    font-size: 24px;
    font-family: Nunito, sans-serif;
    font-weight: 400;
    margin: 12px 0 6px 0;
    text-align: center;
`;
export const TextDate = styled.div`
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.textSoftColor};
    font-size: 12px;
    text-align: center;
    font-family: Nunito, sans-serif;
    letter-spacing: 1px;
`;

export const AddWrapper = styled.button`
    background-color: ${({ theme }) => theme.bgMainColor};
    color: ${({ theme }) => theme.textSoftColor};
    border: none;
    box-shadow: ${({ theme }) => theme.login.boxShadowButtonSmall};
    font-size: 24px;
    margin-top: 8px;
    max-width: 200px;
    min-width: 120px;
    width: 8vw;
    border-radius: 12px;
`;
