import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as api from '../../api/apis';

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

const GroupsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
`;

const GroupWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Settings = () => {
    const [nestedGroups, setNestedGroups] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState({});
    const concatGroups = groups => {
        console.log('elo2');
        let iterate = 0;
        return groups.reduce((acc, curGroup) => {
            if (acc.length > 0) {
                if (acc[iterate][0].type === curGroup.type) {
                    acc[iterate].push(curGroup);
                    return acc;
                } else {
                    iterate += 1;
                    acc.push([curGroup]);
                    return acc;
                }
            } else {
                acc.push([curGroup]);
                return acc;
            }
        }, []);
    };

    const initSelectedGroups = concatedGroups => {
        concatedGroups.forEach(groups => {
            console.log('leci');
            const gr = {};
            gr[groups[0].type] = groups[0]._id;
            setSelectedGroups(prevState => ({
                ...prevState,
                ...gr,
            }));
        });
    };

    useEffect(() => {
        (async () => {
            try {
                const { groups } = await api.getAllGroups();
                const concatedGroups = concatGroups(groups);
                setNestedGroups(concatedGroups);
                initSelectedGroups(concatedGroups);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    const handleSubmitUpdateGroups = e => {
        e.preventDefault();
        console.log(selectedGroups);
    };

    const handleSelectChange = e => {
        console.log(e.target.name);
        console.log(e.target.value);
        setSelectedGroups(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

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
            <FormWrapper onSubmit={handleSubmitUpdateGroups}>
                <GroupsWrapper>
                    {nestedGroups.map((groups, i) => (
                        <GroupWrapper key={i}>
                            <p>{groups[0].name}</p>
                            <select
                                name={groups[0].type}
                                onChange={handleSelectChange}>
                                {groups.map((group, j) => (
                                    <option value={group._id} key={j}>
                                        {group.nr} {group.lastNames}
                                    </option>
                                ))}
                            </select>
                        </GroupWrapper>
                    ))}
                </GroupsWrapper>
                <input type="submit" value="update Groups" />
            </FormWrapper>
        </SettingsWrapper>
    );
};

export default Settings;
