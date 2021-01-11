import styled from 'styled-components';

export const SettingsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${({ theme }) => theme.textSoftColor};

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        margin: 0;
        align-items: center;
    }
`;

export const SettingsTitleWrapper = styled.h1`
    color: ${({ theme }) => theme.textColor};
    text-align: center;
    margin: 40px 0 40px 0;
    font-family: Proza Libre, sans-serif;
    font-weight: 600;
    font-size: 46px;
    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        margin: 20px 0 20px 0;
        font-size: 28px;
    }
`;
export const SmallTitleWrapper = styled.h3`
    color: ${({ theme }) => theme.textColor};
    font-family: Nunito, sans-serif;
    margin: 0;
    text-align: center;
    font-size: 26px;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        font-size: 20px;
    }
`;
export const ProfileInformationWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        flex-direction: column;
    }
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputWrapper = styled.input`
    width: 20vw;
    min-width: 200px;
    max-width: 400px;
    background-color: ${({ theme }) => theme.bgMainColor};
    color: ${({ theme }) => theme.textSoftColor};
    border: none;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.settings.input};
    padding: 8px 12px;
    font-size: 16px;
    margin: 12px 0;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        margin: 8px 0;
        width: 80vw;
    }
`;

export const GroupsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        width: 82vw;
    }
`;

export const GroupWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
`;

export const FormPasswordWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        margin: 20px 0;
    }
`;

export const PWrapper = styled.p`
    font-size: 18px;
    background-color: ${({ theme }) => theme.bgMainColor};
    box-shadow: ${({ theme }) => theme.settings.button};
    width: 20vw;
    min-width: 200px;
    max-width: 400px;
    text-align: center;
    padding: 4px 6px 4px 6px;
    border-radius: 120px;
    margin: 12px 0;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        margin: 8px 0;
        width: 80vw;
    }
`;

export const InputButton = styled.input`
    background-color: ${({ theme }) => theme.bgMainColor};
    box-shadow: ${({ theme }) => theme.settings.button};
    color: ${({ theme }) => theme.textColor};
    border: none;
    font-size: ${({ small }) => (small ? '16px' : '20px')};
    padding: 8px 12px;
    border-radius: 10px;
    cursor: pointer;
    width: 16vw;
    min-width: 120px;
    max-width: 220px;
    margin-top: 12px;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        font-size: 16px;
        width: 40vw;
        margin-bottom: 20px;
    }
`;

export const SelectWrapper = styled.select`
    font-size: 16px;
    text-align: center;
    width: 18vw;
    min-width: 180px;
    max-width: 300px;
    border: none;
    background-color: ${({ theme }) => theme.bgMainColor};
    color: ${({ theme }) => theme.textSoftColor};
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.settings.button};
    padding: 6px 12px;

    ::-ms-expand {
        display: none;
    }

    -webkit-appearance: none;
    appearance: none;

    @media (max-width: ${({ theme }) => theme.phoneSize}) {
        width: 50vw;
    }
`;
