import React, { useState } from 'react';

import * as api from '../api/apis';
import { useStore } from '../SweetState/store';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import SmallCalendar from '../Components/SmallCalendar';
import Column from '../Components/Column';
// import { addHours, compareAsc, isSameDay } from 'date-fns';
import {
    CenterWrapper,
    ColumnsWrapper,
    IconButtonWrapper,
    LeftSideWrapper,
    MainWrapper,
    RightSideWrapper,
} from '../Styled/Sites/Main';

import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg';
import { ReactComponent as MoonIcon } from '../assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';
import { useHistory } from 'react-router-dom';

const Main = () => {
    const history = useHistory();

    const [stateStore, actionsStore] = useStore();
    const [foods, setFoods] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    const getFoods = async () => {
        try {
            const data = await api.getFoods();
            console.log(data);
            setFoods(data);
            setFetchError(null);
        } catch (err) {
            setFetchError(err.message);
        }
    };

    // const templateData = [
    //     {
    //         name: 'Analiza',
    //         description: 'Nie wiem co tam będzie',
    //         startDate: new Date(2022, 1, 7),
    //         endDate: addHours(new Date(2022, 1, 7), 2),
    //         type: 'zajęcia',
    //         personal: false, // false - group, true - user
    //         color: 'teal',
    //     },
    //     {
    //         name: 'Metale',
    //         description: 'Nie wiem co tam będzie',
    //         startDate: new Date(2022, 1, 7),
    //         endDate: addHours(new Date(2022, 1, 7), 2),
    //         type: 'zajęcia',
    //         personal: false, // false - group, true - user
    //         color: 'teal',
    //     },
    //     {
    //         name: 'Analiza',
    //         description: 'Nie wiem co tam będzie',
    //         startDate: new Date(2021, 1, 7),
    //         endDate: addHours(new Date(2021, 1, 7), 2),
    //         type: 'zajęcia',
    //         personal: false, // false - group, true - user
    //         color: 'red',
    //     },
    //     {
    //         name: 'Algebra',
    //         description: 'Nie wiem co tam będzie',
    //         startDate: new Date(),
    //         endDate: addHours(new Date(), 2),
    //         type: 'zajęcia',
    //         personal: false, // false - group, true - user
    //         color: 'yellow',
    //     },
    //     {
    //         name: 'Algebra',
    //         description: 'Nie wiem co tam będzie',
    //         startDate: addHours(new Date(), 2),
    //         endDate: addHours(new Date(), 4),
    //         type: 'zajęcia',
    //         personal: false, // false - group, true - user
    //         color: 'teal',
    //     },
    // ];
    //
    // let iterate = 0;
    // templateData.sort((a, b) => compareAsc(a.startDate, b.startDate));
    // const columns = templateData.reduce((acc, curEvent) => {
    //     console.log(acc);
    //     if (acc.length > 0) {
    //         console.log(
    //             isSameDay(acc[iterate][0].startDate, curEvent.startDate)
    //         );
    //         if (isSameDay(acc[iterate][0].startDate, curEvent.startDate)) {
    //             acc[iterate].push(curEvent);
    //             return acc;
    //         } else {
    //             iterate += 1;
    //             acc.push([curEvent]);
    //             return acc;
    //         }
    //     } else {
    //         acc.push([curEvent]);
    //         return acc;
    //     }
    // }, []);

    return (
        <MainWrapper>
            <LeftSideWrapper>
                <IconButtonWrapper onClick={() => history.push('/settings')}>
                    <SettingsIcon />
                </IconButtonWrapper>
                <IconButtonWrapper onClick={() => actionsStore.changeTheme()}>
                    {stateStore.isLightTheme ? <MoonIcon /> : <SunIcon />}
                </IconButtonWrapper>
                <IconButtonWrapper onClick={() => actionsStore.logout()}>
                    <LogoutIcon />
                </IconButtonWrapper>
            </LeftSideWrapper>
            <CenterWrapper>
                <ColumnsWrapper>
                    {stateStore.selectedDays.map(day => (
                        <Column key={day} date={day} />
                    ))}
                </ColumnsWrapper>
            </CenterWrapper>
            <RightSideWrapper>
                <SmallCalendar />
                <button onClick={() => getFoods()}>GET DATAS</button>
                <ul>
                    {foods.map((dat, i) => (
                        <li key={i}>{dat.description}</li>
                    ))}
                </ul>
                <div>{fetchError}</div>
            </RightSideWrapper>
        </MainWrapper>
    );
};

export default Main;
