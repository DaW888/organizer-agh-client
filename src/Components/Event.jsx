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
    return (
        <EventWrapper>
            <TimeWrapper>
                {format(data.startDate, 'H:mm')} -{' '}
                {format(data.endDate, 'H:mm')}
            </TimeWrapper>
            <TitleWrapper color={data.color}>{data.name}</TitleWrapper>
            <TypeWrapper>{data.type}</TypeWrapper>
            <DescriptionWrapper>{data.description}</DescriptionWrapper>
        </EventWrapper>
    );
};

export default Event;
