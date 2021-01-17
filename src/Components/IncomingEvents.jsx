import React, { useEffect, useState } from 'react';
import * as api from '../api/apis';
import { compareAsc, formatISO } from 'date-fns';
import { useStore } from '../SweetState/store';
import IncomingEvent from './IncomingEvent';
import styled from 'styled-components';
import {
    IncomingEventsInner,
    IncomingEventsWrapper,
} from '../Styled/Components/IncomingEvent';

const IncomingEventsTitle = styled.div`
    font-family: Nunito, sans-serif;
    font-size: 26px;
    text-align: center;
    margin: 12px 0 12px 0;
    color: ${({ theme }) => theme.textColor};
`;

const IncomingEvents = () => {
    const [stateStore] = useStore();
    const [incomingEvents, setIncomingEvents] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const groupsArr = Object.values(stateStore.user.groups).map(
                    group => group._id
                );
                const res = await api.getIncomingEvents({
                    date: formatISO(new Date()),
                    groupsId: groupsArr,
                });
                const eventsArr = res.map(events => events.events);
                const flatEvents = eventsArr.flat();
                flatEvents.sort((a, b) =>
                    compareAsc(new Date(a.dateStart), new Date(b.dateStart))
                );
                setIncomingEvents(flatEvents);
                console.log(flatEvents);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <IncomingEventsWrapper>
            <IncomingEventsTitle>Incoming Events</IncomingEventsTitle>
            <IncomingEventsInner>
                {incomingEvents.map((event, i) => (
                    <IncomingEvent key={i} data={event} />
                ))}
            </IncomingEventsInner>
        </IncomingEventsWrapper>
    );
};

export default IncomingEvents;
