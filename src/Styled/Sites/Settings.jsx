import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as api from '../../api/apis';
import { useStore } from '../../SweetState/store';

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

const FormPasswordWrapper = styled.form`
    display: flex;
    flex-direction: column;
`;

const Settings = () => {
    const [stateStore, actionsStore] = useStore();

    const [groupsUpdatedMessage, setGroupsUpdatedMessage] = useState('');
    const [nestedGroups, setNestedGroups] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState({});

    const [passwordUpdateMessage, setPasswordUpdateMessage] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repNewPassword, setRepNewPassword] = useState('');

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
            gr[groups[0].type] = {
                _id: groups[0]._id,
                lastNames: `${groups[0].nr} ${groups[0].lastNames}`,
            };
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

    const handleSubmitUpdateGroups = async e => {
        e.preventDefault();
        console.log(selectedGroups);
        try {
            const res = await api.changeUserGroups({
                selectedGroups,
                userId: stateStore.user.id,
            });
            console.log(res);
            setGroupsUpdatedMessage('Groups updated');
            actionsStore.updateUserGroups(selectedGroups);
        } catch (err) {
            console.log(err);
            setGroupsUpdatedMessage(`Can't update groups`);
        }
    };

    const handleSelectChange = e => {
        console.log(e.target.name);
        const values = JSON.parse(e.target.value);
        setSelectedGroups(prevState => ({
            ...prevState,
            [e.target.name]: {
                _id: values._id,
                lastNames: values.lastNames,
            },
        }));
    };

    const handlePasswordSubmit = async e => {
        e.preventDefault();

        if (!(newPassword === repNewPassword)) {
            setPasswordUpdateMessage(
                'Repeated password not same as new password'
            );
        } else {
            try {
                const res = await api.updateUserPassword({
                    userId: stateStore.user.id,
                    newPass: newPassword,
                    oldPass: oldPassword,
                });
                setPasswordUpdateMessage(res.message);
            } catch (err) {
                setPasswordUpdateMessage(err.response.data.message);
            }
        }
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
                <FormPasswordWrapper onSubmit={handlePasswordSubmit}>
                    <SmallTitleWrapper>Change Password</SmallTitleWrapper>
                    <InputWrapper
                        type="password"
                        placeholder="Old Password"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                    />
                    <InputWrapper
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                    <InputWrapper
                        value={repNewPassword}
                        onChange={e => setRepNewPassword(e.target.value)}
                        type="password"
                        placeholder="Repeat New Password"
                    />
                    <input type="submit" value="Update" />
                    {passwordUpdateMessage && (
                        <div>{passwordUpdateMessage}</div>
                    )}
                </FormPasswordWrapper>
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
                                    <option
                                        value={JSON.stringify({
                                            _id: group._id,
                                            lastNames: `${group.nr} ${group.lastNames}`,
                                        })}
                                        key={j}>
                                        {group.nr} {group.lastNames}
                                    </option>
                                ))}
                            </select>
                        </GroupWrapper>
                    ))}
                </GroupsWrapper>
                <input type="submit" value="update Groups" />
                {groupsUpdatedMessage && <div>{groupsUpdatedMessage}</div>}
            </FormWrapper>
        </SettingsWrapper>
    );
};

export default Settings;
