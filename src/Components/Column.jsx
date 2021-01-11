import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Event from './Event';
import {
    AddWrapper,
    ColumnWrapper,
    HeaderWrapper,
    TextDate,
    TitleWrapper,
} from '../Styled/Components/Column';
import AddEvent from './AddEvent';
import * as api from '../api/apis';
import { useStore } from '../SweetState/store';

const Column = ({ date }) => {
    console.log(date);
    const [stateStore] = useStore();
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
            const groupsArr = Object.values(stateStore.user.groups).map(
                group => group._id
            );
            try {
                const res = await api.getEvents({
                    groupsId: groupsArr,
                    date: date.getTime(),
                });
                console.log(res);
                const eventsArr = res.map(events => {
                    return events.events;
                });
                setEvents(eventsArr.flat());
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

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
                {events.length > 0 &&
                    events.map((event, i) => <Event key={i} data={event} />)}
            </div>
        </ColumnWrapper>
    );
};

export default Column;
