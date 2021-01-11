import React, { useEffect, useState } from 'react';
import * as api from '../api/apis';
import { useStore } from '../SweetState/store';
import {
    FormPasswordWrapper,
    GroupsWrapper,
    GroupWrapper,
    InputsWrapper,
    ProfileInformationWrapper,
    SettingsTitleWrapper,
    SettingsWrapper,
    SmallTitleWrapper,
    FormWrapper,
    InputWrapper,
    PWrapper,
    InputButton,
    SelectWrapper,
} from '../Styled/Sites/Settings';

const Settings = () => {
    const [stateStore, actionsStore] = useStore();
    console.log(stateStore.user);
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
                    <PWrapper>{stateStore.user.name}</PWrapper>
                    <PWrapper>{stateStore.user.surname}</PWrapper>
                    <PWrapper>{stateStore.user.email}</PWrapper>
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
                    <InputButton small type="submit" value="Update" />
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
                            <SelectWrapper
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
                            </SelectWrapper>
                        </GroupWrapper>
                    ))}
                </GroupsWrapper>
                <InputButton type="submit" value="Update Groups" />
                {groupsUpdatedMessage && <div>{groupsUpdatedMessage}</div>}
            </FormWrapper>
        </SettingsWrapper>
    );
};

export default Settings;
