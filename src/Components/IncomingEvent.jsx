import React from 'react';
import {
    DateAndTimeWrapper,
    DescriptionWrapper,
    EventWrapper,
    TimeWrapper,
    TitleWrapper,
    TypeWrapper,
} from '../Styled/Components/IncomingEvent';
import { format, formatDistanceToNow } from 'date-fns';

const IncomingEvent = ({ data }) => {
    return (
        <EventWrapper>
            <TimeWrapper>
                <DateAndTimeWrapper>
                    {format(new Date(data.dateStart), 'dd / MM / yyyy')}
                </DateAndTimeWrapper>
                <DateAndTimeWrapper>
                    {format(new Date(data.dateStart), 'H:mm')} -{' '}
                    {format(new Date(data.dateEnd), 'H:mm')}
                </DateAndTimeWrapper>
                {formatDistanceToNow(new Date(data.dateStart), {
                    addSuffix: true,
                })}
            </TimeWrapper>
            <TitleWrapper color={data.type}>{data.name}</TitleWrapper>
            <TypeWrapper>{data.group.lastNames}</TypeWrapper>
            <DescriptionWrapper>{data.description}</DescriptionWrapper>
        </EventWrapper>
    );
};

export default IncomingEvent;
