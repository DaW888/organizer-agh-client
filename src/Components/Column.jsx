import React, { useState, useEffect } from 'react';
import { format, compareAsc, formatISO } from 'date-fns';

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
    const [stateStore] = useStore();
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [isEventEdited, setIsEventEdited] = useState(false);
    useEffect(() => {
        (async () => {
            const groupsArr = Object.values(stateStore.user.groups).map(
                group => group._id
            );
            try {
                const res = await api.getEvents({
                    groupsId: groupsArr,
                    date: formatISO(date),
                });
                const eventsArr = res.map(events => events.events);
                const flatEvents = eventsArr.flat();
                flatEvents.sort((a, b) =>
                    compareAsc(new Date(a.dateStart), new Date(b.dateStart))
                );
                console.log(date);
                console.log(flatEvents);
                setEvents(flatEvents);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [isEventEdited]);

    const handleEditEvent = () => {
        setIsEventEdited(prev => !prev);
    };

    return (
        <ColumnWrapper>
            <HeaderWrapper>
                <TitleWrapper>{format(date, 'EEEE')}</TitleWrapper>
                <TextDate>{format(date, 'dd / MM / yyyy')}</TextDate>
                <AddWrapper onClick={() => setIsAddOpen(prev => !prev)}>
                    {isAddOpen ? '-' : '+'}
                </AddWrapper>
                {isAddOpen && (
                    <AddEvent date={date} isEventAdded={handleEditEvent} />
                )}
            </HeaderWrapper>
            <div>
                {events.length > 0 &&
                    events.map((event, i) => (
                        <Event
                            key={i}
                            data={event}
                            isEventEdited={handleEditEvent}
                        />
                    ))}
            </div>
        </ColumnWrapper>
    );
};

export default Column;
