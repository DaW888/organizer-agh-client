import React, { useState } from 'react';
import styled from 'styled-components';

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

const AddEvent = ({ date }) => {
    const [nameEvent, setNameEvent] = useState('');
    const [startEvent, setStartEvent] = useState('');
    const [endEvent, setEndEvent] = useState('');
    const [typeEvent, setTypeEvent] = useState('');
    const [groupEvent, setGroupEvent] = useState('');
    const [descriptionEvent, setDescriptionEvent] = useState('');

    const handleSubmitEvent = e => {
        console.log(date);
        e.preventDefault();
        console.log('wysylam');
    };
    return (
        <FormWrapper onSubmit={e => handleSubmitEvent(e)}>
            <InputWrapper
                type="text"
                placeholder="name"
                value={nameEvent}
                onChange={e => setNameEvent(e.target.value)}
            />
            <SmallInputsWrapper>
                <InputHalfWrapper
                    type="time"
                    placeholder="start"
                    value={startEvent}
                    onChange={e => setStartEvent(e.target.value)}
                />
                <InputHalfWrapper
                    type="time"
                    placeholder="end"
                    value={endEvent}
                    onChange={e => setEndEvent(e.target.value)}
                />
            </SmallInputsWrapper>
            <InputWrapper
                type="text"
                placeholder="type"
                value={typeEvent}
                onChange={e => setTypeEvent(e.target.value)}
            />
            <InputWrapper
                type="text"
                placeholder="group"
                value={groupEvent}
                onChange={e => setGroupEvent(e.target.value)}
            />
            <InputWrapper
                type="text"
                placeholder="description"
                value={descriptionEvent}
                onChange={e => setDescriptionEvent(e.target.value)}
            />
            <InputWrapper type="submit" value="Add Event" />
        </FormWrapper>
    );
};

export default AddEvent;
