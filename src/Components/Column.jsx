import React from 'react';
import { addHours, format } from 'date-fns';

import Event from './Event';
import {
    AddWrapper,
    ColumnWrapper,
    HeaderWrapper,
    TextDate,
    TitleWrapper,
} from '../Styled/Components/Column';

const Column = ({ date }) => {
    const arrayEvent = [
        {
            name: 'Analiza',
            description: 'Nie wiem co tam będzie',
            startDate: new Date(2021, 1, 7),
            endDate: addHours(new Date(2021, 1, 7), 2),
            type: 'zajęcia',
            personal: false, // false - group, true - user
            color: 'red',
        },
    ];

    return (
        <ColumnWrapper>
            <HeaderWrapper>
                <TitleWrapper>{format(date, 'EEEE')}</TitleWrapper>
                <TextDate>{format(date, 'dd / MM / yyyy')}</TextDate>
                <AddWrapper>+</AddWrapper>
            </HeaderWrapper>
            <div>
                {arrayEvent.map(event => (
                    <Event key={event.name + event.endDate} data={event} />
                ))}
            </div>
        </ColumnWrapper>
    );
};

export default Column;
