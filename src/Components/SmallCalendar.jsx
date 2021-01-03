import React, { useState } from 'react';
import { Calendar } from 'react-modern-calendar-datepicker';
import { differenceInCalendarDays, eachDayOfInterval } from 'date-fns';
import styled from 'styled-components';

const StyledCalendarContainer = styled.div`
    margin: 10px;

    .Calendar {
        transition: ${({ theme }) => theme.transition};
        font-family: Open Sans, sans-serif;
        min-height: 22em;
        max-height: 32em;
        background-color: ${({ theme }) => theme.bgMainColor};
        box-shadow: ${({ theme }) =>
            theme.main.smallCalendar.boxShadowContainer};
        color: ${({ theme }) => theme.textColor};

        --cl-color-primary: ${({ theme }) => theme.accentOrange} !important;
        --cl-color-primary-light: ${({ theme }) =>
            theme.bgMainColor} !important;

        .Calendar__monthYear.-shown > :hover,
        .Calendar:not(.-noFocusOutline) .Calendar__monthYear.-shown > :focus,
        .Calendar__monthYear > .-activeBackground {
            transition: ${({ theme }) => theme.transition};
            background: ${({ theme }) => theme.bgMainColor};
            box-shadow: ${({ theme }) =>
                theme.main.smallCalendar.boxShadowElement};
        }

        &__yearSelectorWrapper {
            ::before,
            ::after {
                display: none;
            }

            overflow: hidden;
        }

        &__monthSelector,
        &__yearSelector {
            transition: ${({ theme }) => theme.transition};
            background: ${({ theme }) => theme.bgMainColor};
        }

        &__monthSelectorItem {
            transition: ${({ theme }) => theme.transition};
            background: ${({ theme }) => theme.bgMainColor};
            color: ${({ theme }) => theme.textColor};
        }

        .Calendar__monthSelectorItemText,
        .Calendar__yearSelectorText {
            transition: ${({ theme }) => theme.transition};
            color: ${({ theme }) => theme.textColor};
            padding: 6px;
            background: ${({ theme }) => theme.bgMainColor};
            box-shadow: ${({ theme }) =>
                theme.main.smallCalendar.boxShadowElement};
        }

        .Calendar__monthSelectorItem:not(.-active)
            .Calendar__monthSelectorItemText:not(:disabled):hover,
        .Calendar__yearSelectorItem:not(.-active)
            .Calendar__yearSelectorText:not(:disabled):hover {
            transition: ${({ theme }) => theme.transition};
            background: ${({ theme }) => theme.bgMainColor};
            box-shadow: ${({ theme }) =>
                theme.main.smallCalendar.boxShadowElementHover};
        }

        .Calendar__monthSelectorItem.-active .Calendar__monthSelectorItemText,
        .Calendar__yearSelectorItem.-active .Calendar__yearSelectorText {
            transition: ${({ theme }) => theme.transition};
            background: ${({ theme }) => theme.bgMainColor};
            color: ${({ theme }) => theme.accentOrange};
            box-shadow: ${({ theme }) =>
                theme.main.smallCalendar.boxShadowElementHover};
        }

        &__monthSelectorItemText {
            transition: ${({ theme }) => theme.transition};
            background: ${({ theme }) => theme.bgMainColor};
            color: ${({ theme }) => theme.textColor};
        }

        &__monthText,
        &__yearText {
            transition: ${({ theme }) => theme.transition};
            color: ${({ theme }) => theme.textColor};
        }

        &__day {
            transition: ${({ theme }) => theme.transition};
            min-height: 2.2em;
            background: ${({ theme }) => theme.bgMainColor};
            box-shadow: ${({ theme }) =>
                theme.main.smallCalendar.boxShadowElement};
            margin: 2px;
            color: ${({ theme }) => theme.textSoftColor};

            :hover {
                box-shadow: ${({ theme }) =>
                    theme.main.smallCalendar.boxShadowElementHover} !important;
                background: ${({ theme }) => theme.bgMainColor};
            }
        }

        .-blank {
            box-shadow: none;
        }

        .-selectedBetween,
        .-selectedStart,
        .-selectedEnd {
            transition: ${({ theme }) => theme.transition};
            box-shadow: ${({ theme }) =>
                theme.main.smallCalendar.boxShadowElementHover};
            color: ${({ theme }) => theme.accentOrange};
        }
    }

    .Calendar__day:not(.-blank):not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween):not(.-selected):hover {
        transition: ${({ theme }) => theme.transition};
        background: none;
        border: none;
        color: ${({ theme }) => theme.textColor};
    }

    .-today:not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween) {
        color: ${({ theme }) => theme.textColor};
        font-weight: 700;

        ::after {
            background: ${({ theme }) => theme.textColor};
        }
    }
`;

const SmallCalendar = () => {
    const [selectedDay, setSelectedDay] = useState({
        from: null,
        to: null,
    });

    const handleCalendar = data => {
        const from = new Date(data.from.year, data.from.month, data.from.day);
        const to = data.to
            ? new Date(data.to.year, data.to.month, data.to.day)
            : null;

        if (to) {
            const c = differenceInCalendarDays(from, to);
            if (c < -6) {
                console.log('select max 7 days');
                setSelectedDay({ from: null, to: null });
                return;
            } else {
                setSelectedDay(data);
                const arrDays = eachDayOfInterval({ start: from, end: to });
                console.log(arrDays);
            }
            console.log(c);
        }
        setSelectedDay(data);

        console.log(from, to);
        console.log(data);
    };

    const myCustomLocale = {
        // months list by order
        months: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],

        // week days by order
        weekDays: [
            {
                name: 'Monday',
                short: 'Mon',
            },
            {
                name: 'Tuesday',
                short: 'Tue',
            },
            {
                name: 'Wednesday',
                short: 'Wed',
            },
            {
                name: 'Thursday',
                short: 'Thu',
            },
            {
                name: 'Friday',
                short: 'Fri',
            },
            {
                name: 'Saturday',
                short: 'Sat',
                isWeekend: true,
            },
            {
                name: 'Sunday', // used for accessibility
                short: 'Sun', // displayed at the top of days' rows
                isWeekend: true, // is it a formal weekend or not?
            },
        ],

        // just play around with this number between 0 and 6
        weekStartingIndex: 6,

        // return a { year: number, month: number, day: number } object
        getToday(gregorainTodayObject) {
            return gregorainTodayObject;
        },

        // return a native JavaScript date here
        toNativeDate(date) {
            return new Date(date.year, date.month - 1, date.day);
        },

        // return a number for date's month length
        getMonthLength(date) {
            return new Date(date.year, date.month, 0).getDate();
        },

        // return a transformed digit to your locale
        transformDigit(digit) {
            return digit;
        },

        // texts in the date picker
        nextMonth: 'Next Month',
        previousMonth: 'Previous Month',
        openMonthSelector: 'Open Month Selector',
        openYearSelector: 'Open Year Selector',
        closeMonthSelector: 'Close Month Selector',
        closeYearSelector: 'Close Year Selector',
        defaultPlaceholder: 'Select...',

        // for input range value
        from: 'from',
        to: 'to',

        // used for input value when multi dates are selected
        digitSeparator: ',',

        // if your provide -2 for example, year will be 2 digited
        yearLetterSkip: 0,

        // is your language rtl or ltr?
        isRtl: false,
    };

    return (
        <StyledCalendarContainer>
            <Calendar
                locale={myCustomLocale}
                value={selectedDay}
                onChange={handleCalendar}
            />
        </StyledCalendarContainer>
    );
};

export default SmallCalendar;