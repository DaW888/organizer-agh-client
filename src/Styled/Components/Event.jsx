import styled from 'styled-components';

export const EventWrapper = styled.div`
    transition: ${({ theme }) => theme.transition};
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.bgMainColor};
    max-width: 220px;
    min-width: 140px;
    width: 12vw;
    border-radius: 22px;
    padding: 16px;
    box-shadow: ${({ theme }) => theme.main.columns.boxShadowEvent};
`;

export const TimeWrapper = styled.div`
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.textSoftColor};
    font-size: 12px;
`;
export const TitleWrapper = styled.h3`
    margin: 8px 0 8px 0;
    font-size: 14px;
    color: ${({ theme }) => ({ color }) => theme.eventColors[color]};
    font-weight: 600;
    cursor: pointer;
`;
export const TypeWrapper = styled.div`
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.textSoftColor};
    font-size: 12px;
`;
export const DescriptionWrapper = styled.div`
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.textColor};
    margin-top: 8px;
    font-size: 12px;
    font-weight: 600;
`;
