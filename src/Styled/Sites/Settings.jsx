import React from 'react';
import styled from 'styled-components';

const SettingsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${({ theme }) => theme.textSoftColor};
`;

const SettingsTitleWrapper = styled.h1`
    color: ${({ theme }) => theme.textColor};
    text-align: center;
    margin: 40px 0 40px 0;
    font-family: Proza Libre, sans-serif;
    font-weight: 600;
    font-size: 46px;
`;
const SmallTitleWrapper = styled.h3`
    color: ${({ theme }) => theme.textColor};
    font-family: Nunito, sans-serif;
    margin: 0;
    text-align: center;
    font-size: 26px;
`;
const ProfileInformationWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputWrapper = styled.input`
    margin: 4px 0 4px 0;
`;

const Settings = () => {
    return (
        <SettingsWrapper>
            <SettingsTitleWrapper>Settings</SettingsTitleWrapper>
            <ProfileInformationWrapper>
                <InputsWrapper>
                    <SmallTitleWrapper>Profile</SmallTitleWrapper>
                    <p>Michał</p>
                    <p>Michał</p>
                    <p>Michał</p>
                </InputsWrapper>
                <InputsWrapper>
                    <SmallTitleWrapper>Change Password</SmallTitleWrapper>
                    <InputWrapper type="password" placeholder="Old Password" />
                    <InputWrapper type="password" placeholder="New Password" />
                    <InputWrapper
                        type="password"
                        placeholder="Repeat New Password"
                    />
                </InputsWrapper>
            </ProfileInformationWrapper>
        </SettingsWrapper>
    );
};

export default Settings;
