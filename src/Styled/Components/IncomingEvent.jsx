import styled from 'styled-components';

// CONTAINERS
export const IncomingEventsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const IncomingEventsInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 40vh;
    overflow: auto;

    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

// ELEMENTS

export const EventWrapper = styled.div`
    transition: ${({ theme }) => theme.transition};
    margin: 10px 0 10px 0;
    background-color: ${({ theme }) => theme.bgMainColor};
    width: 80%;
    min-width: 140px;
    border-radius: 22px;
    padding: 16px;
    box-shadow: ${({ theme }) => theme.main.columns.boxShadowEvent};
`;

export const TimeWrapper = styled.div`
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.textSoftColor};
    font-size: 12px;
`;

export const DateAndTimeWrapper = styled.div`
    font-weight: 400;
`;
export const TitleWrapper = styled.h3`
    margin: 8px 0 8px 0;
    font-size: 14px;
    color: ${({ theme }) => ({ color }) => theme.eventColors[color]};
    font-weight: 600;
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
