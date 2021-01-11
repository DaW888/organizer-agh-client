import React, { useState } from 'react';
import { format } from 'date-fns';
import {
    DescriptionWrapper,
    EventWrapper,
    TimeWrapper,
    TypeWrapper,
    TitleWrapper,
} from '../Styled/Components/Event';
import EditEvent from './EditEvent';
import * as api from '../api/apis';

const Event = ({ data, isEventEdited }) => {
    const [isEdit, setIsEdit] = useState(false);
    const handleDiscardChanges = () => {
        setIsEdit(false);
    };

    const handleRemoveEvent = async () => {
        console.log('remove event');
        setIsEdit(false);
        try {
            const res = await api.deleteEvent({
                groupId: data.group._id,
                eventId: data._id,
            });
            console.log(res);
            isEventEdited();
        } catch (err) {
            console.log(err);
        }
    };

    const handleEditEvent = () => {
        console.log('edit');
        setIsEdit(false);
        isEventEdited();
    };

    if (isEdit) {
        return (
            <EditEvent
                data={data}
                clickDiscard={handleDiscardChanges}
                clickRemove={handleRemoveEvent}
                clickEdit={handleEditEvent}
            />
        );
    }
    return (
        <EventWrapper onClick={() => setIsEdit(true)}>
            <TimeWrapper>
                {format(new Date(data.dateStart), 'H:mm')} -{' '}
                {format(new Date(data.dateEnd), 'H:mm')}
            </TimeWrapper>
            <TitleWrapper color={data.type}>{data.name}</TitleWrapper>
            <TypeWrapper>{data.group.lastNames}</TypeWrapper>
            <DescriptionWrapper>{data.description}</DescriptionWrapper>
        </EventWrapper>
    );
};

export default Event;
