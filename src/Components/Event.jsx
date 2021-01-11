import React from 'react';
import { format } from 'date-fns';
import {
    DescriptionWrapper,
    EventWrapper,
    TimeWrapper,
    TypeWrapper,
    TitleWrapper,
} from '../Styled/Components/Event';

const Event = ({ data }) => {
    console.log(data);
    return (
        <EventWrapper>
            <TimeWrapper>
                {format(new Date(data.dateStart), 'H:mm')} -{' '}
                {format(new Date(data.dateEnd), 'H:mm')}
            </TimeWrapper>
            <TitleWrapper color={data.type}>{data.name}</TitleWrapper>
            <DescriptionWrapper>{data.group.lastNames}</DescriptionWrapper>
            <DescriptionWrapper>{data.description}</DescriptionWrapper>
        </EventWrapper>
    );
};

export default Event;
