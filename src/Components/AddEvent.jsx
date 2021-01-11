import React, { useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../SweetState/store';
import { light } from '../CONSTS/THEMES';
import { compareAsc } from 'date-fns';
import * as api from '../api/apis';

const FormWrapper = styled.form`
    margin: 4px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputWrapper = styled.input`
    margin: 2px;
    width: 90%;
    font-size: 13px;
`;

const SmallInputsWrapper = styled.div`
    margin: 2px 0 6px 0;
    display: flex;
    justify-content: space-between;
`;

const InputHalfWrapper = styled.input`
    width: 48%;
    font-size: 10px;
`;

const SelectWrapper = styled.select``;

const TextareaWrapper = styled.textarea`
    outline: none;
    resize: none;
    overflow: auto;

    ::placeholder {
        text-align: center;
    }
`;

const AddEvent = ({ date }) => {
    const [stateStore, actionsStore] = useStore();

    const [message, setMessage] = useState('');

    const [nameEvent, setNameEvent] = useState('');
    const [startEvent, setStartEvent] = useState('');
    const [endEvent, setEndEvent] = useState('');
    const [typeEvent, setTypeEvent] = useState(
        Object.keys(light.eventColors)[0]
    );
    const [groupEvent, setGroupEvent] = useState(
        Object.values(stateStore.user.groups)[0]
    );
    const [descriptionEvent, setDescriptionEvent] = useState('');

    const displaySelectGroups = () => {
        const groups = stateStore.user.groups;
        const jsxGroups = Object.values(groups).map((group, i) => (
            <option key={i} value={JSON.stringify(group)}>
                {group.lastNames}
            </option>
        ));
        return (
            <select onChange={e => setGroupEvent(JSON.parse(e.target.value))}>
                {jsxGroups}
            </select>
        );
    };

    const displaySelectTypes = () => {
        const colors = Object.keys(light.eventColors);
        const jsxColors = colors.map((color, i) => (
            <option key={i} value={color}>
                {color}
            </option>
        ));

        return (
            <select onChange={e => setTypeEvent(e.target.value)}>
                {jsxColors}
            </select>
        );
    };

    const handleSubmitEvent = async e => {
        e.preventDefault();
        console.log(date);
        console.log(nameEvent);
        console.log(startEvent);
        console.log(endEvent);
        console.log(typeEvent);
        console.log(groupEvent);
        console.log(descriptionEvent);

        const startTime = startEvent.split(':');
        const endTime = endEvent.split(':');

        const dateStart = new Date(date);
        const dateEnd = new Date(date);
        dateStart.setHours(parseInt(startTime[0]));
        dateStart.setMinutes(parseInt(startTime[1]));
        dateStart.setSeconds(0);
        dateEnd.setHours(parseInt(endTime[0]));
        dateEnd.setMinutes(parseInt(endTime[1]));
        dateStart.setSeconds(0);

        if (!(nameEvent && startEvent && endEvent)) {
            return;
        }
        if (compareAsc(dateStart, dateEnd) in [-1, 0]) {
            console.log('zla data');
            setMessage('wrong date');
        } else {
            setMessage('');
            console.log('dobra data');
            const event = {
                name: nameEvent,
                dateStart,
                dateEnd,
                type: typeEvent,
                group: groupEvent,
                description: descriptionEvent,
            };
            try {
                const res = await api.addEvent(event);
                console.log(res);
                setMessage('Event Added');

                setNameEvent('');
                setStartEvent('');
                setEndEvent('');
                setDescriptionEvent('');
            } catch (err) {
                console.log(err);
                setMessage(`Can't add Event`);
            }
        }
    };

    return (
        <FormWrapper onSubmit={e => handleSubmitEvent(e)}>
            <InputWrapper
                required
                type="text"
                placeholder="name"
                value={nameEvent}
                onChange={e => setNameEvent(e.target.value)}
            />
            <SmallInputsWrapper>
                <InputHalfWrapper
                    required
                    type="time"
                    placeholder="start"
                    value={startEvent}
                    onChange={e => setStartEvent(e.target.value)}
                />
                <InputHalfWrapper
                    required
                    type="time"
                    placeholder="end"
                    value={endEvent}
                    onChange={e => setEndEvent(e.target.value)}
                />
            </SmallInputsWrapper>
            {displaySelectTypes()}
            <br />
            {displaySelectGroups()}
            <TextareaWrapper
                value={descriptionEvent}
                onChange={e => setDescriptionEvent(e.target.value)}
                placeholder="description"
                rows="4"
            />
            <InputWrapper type="submit" value="Add Event" />
            {message}
        </FormWrapper>
    );
};

export default AddEvent;
