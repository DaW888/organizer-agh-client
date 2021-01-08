import React, { useState } from 'react';
import { addHours, format } from 'date-fns';
import Event from './Event';
import {
    AddWrapper,
    ColumnWrapper,
    HeaderWrapper,
    TextDate,
    TitleWrapper,
} from '../Styled/Components/Column';
import AddEvent from './AddEvent';

const Column = ({ date }) => {
    const [isAddOpen, setIsAddOpen] = useState(false);

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
                <AddWrapper onClick={() => setIsAddOpen(prev => !prev)}>
                    {isAddOpen ? '-' : '+'}
                </AddWrapper>
                {isAddOpen && <AddEvent date={date} />}
            </HeaderWrapper>
            <div>
                {arrayEvent.map((event, i) => (
                    <Event key={i} data={event} />
                ))}
            </div>
        </ColumnWrapper>
    );
};

export default Column;
