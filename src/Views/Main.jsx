import React, { useState } from 'react';

import * as api from '../api/apis';
import { useStore } from '../SweetState/store';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import SmallCalendar from '../Components/SmallCalendar';

const Main = () => {
    const [, actionsStore] = useStore();
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

    return (
        <div>
            <SmallCalendar />
            <button onClick={() => getFoods()}>GET DATAS</button>
            <ul>
                {foods.map((dat, i) => (
                    <li key={i}>{dat.description}</li>
                ))}
            </ul>
            <div>{fetchError}</div>

            <button
                onClick={() => {
                    actionsStore.logout();
                }}>
                logout
            </button>
        </div>
    );
};

export default Main;
