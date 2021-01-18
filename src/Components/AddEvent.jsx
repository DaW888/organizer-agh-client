import React, { useState } from 'react';
import { useStore } from '../SweetState/store';
import { light } from '../CONSTS/THEMES';
import { compareAsc, formatISO } from 'date-fns';
import * as api from '../api/apis';
import {
    FormWrapper,
    InputHalfWrapper,
    InputWrapper,
    SelectWrapper,
    SmallInputsWrapper,
    TextareaWrapper,
} from '../Styled/Components/AddEvent';

const AddEvent = ({ date, isEventAdded }) => {
    const [stateStore] = useStore();

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
            <SelectWrapper
                onChange={e => setGroupEvent(JSON.parse(e.target.value))}>
                {jsxGroups}
            </SelectWrapper>
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
            <SelectWrapper onChange={e => setTypeEvent(e.target.value)}>
                {jsxColors}
            </SelectWrapper>
        );
    };

    const handleSubmitEvent = async e => {
        e.preventDefault();

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
            const event = {
                name: nameEvent,
                dateStart: formatISO(dateStart),
                dateEnd: formatISO(dateEnd),
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
                isEventAdded();
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
            <InputWrapper
                color="green"
                button
                type="submit"
                value="Add Event"
            />
            {message}
        </FormWrapper>
    );
};

export default AddEvent;
