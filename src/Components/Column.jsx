import React from 'react';
import { format } from 'date-fns';

import Event from './Event';
import {
    AddWrapper,
    ColumnWrapper,
    HeaderWrapper,
    TextDate,
    TitleWrapper,
} from '../Styled/Components/Column';

const Column = ({ arrayEvent, date }) => {
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
