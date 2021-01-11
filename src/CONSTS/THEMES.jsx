const same = {
    transition:
        'background-color 0.75s linear, background 0.75s linear, color 0.75s linear, box-shadow 0.75s linear',
    phoneSize: '768px',
};

export const light = {
    ...same,
    bgMainColor: '#EAEEF6',
    textColor: '#373F4C',
    textSoftColor: '#505359',
    accentOrange: '#FE7F7F',
    eventColors: {
        teal: '#1FAD94',
        red: '#CF1B1B',
        yellow: '#F4A52F',
        blue: '#11B4CA',
        magenta: '#DD2DE1',
        green: '#439735',
    },
    login: {
        boxShadowInput:
            'inset 6px 6px 10px #d5d9e0, inset -6px -6px 10px #ffffff',
        boxShadowButton: '6px 6px 10px #d5d9e0, -6px -6px 10px #ffffff;',
        boxShadowInputSmall:
            'inset 3px 3px 5px #d5d9e0, inset -3px -3px 5px #ffffff',
        boxShadowButtonSmall: '3px 3px 5px #d5d9e0, -3px -3px 5px #ffffff;',
    },
    main: {
        smallCalendar: {
            boxShadowElement: '2px 2px 3px #d5d9e0, -2px -2px 3px #ffffff',
            boxShadowElementHover:
                'inset 2px 2px 3px #d5d9e0, inset -2px -2px 3px #ffffff',
            boxShadowContainer: '6px 6px 10px #d5d9e0, -6px -6px 10px #ffffff',
        },
        columns: {
            boxShadowColumn: '6px 6px 10px #d5d9e0, -6px -6px 10px #ffffff',
            boxShadowEvent: '-4px -4px 6px #ffffff, 4px 4px 6px #d5d9e0',
        },
        addEvent: {
            smallInput:
                'inset -2px -2px 4px #ffffff, inset 2px 2px 4px #d5d9e0',
            smallButton: '-2px -2px 4px #ffffff, 2px 2px 4px #d5d9e0',
        },
    },
};

export const dark = {
    ...same,
    bgMainColor: '#33363F',
    textColor: '#D3D3DE',
    textSoftColor: '#D0D5DD',
    accentOrange: '#FE7F7F',
    eventColors: {
        teal: '#4adec4',
        red: '#EB6565',
        yellow: '#F9CF90',
        blue: '#50ddf0',
        magenta: '#EC88EE',
        green: '#76CA68',
    },
    login: {
        boxShadowInput:
            'inset 6px 6px 10px #292C33, inset -6px -6px 10px #3D404B',
        boxShadowButton: '6px 6px 10px #292C33, -6px -6px 10px #3D404B',
        boxShadowInputSmall:
            'inset 3px 3px 5px #292C33, inset -3px -3px 5px #3D404B',
        boxShadowButtonSmall: '3px 3px 5px #292C33, -3px -3px 5px #3D404B',
    },
    main: {
        smallCalendar: {
            boxShadowElement: '2px 2px 3px #292C33, -2px -2px 3px #3D404B',
            boxShadowElementHover:
                'inset 2px 2px 3px #292C33, inset -2px -2px 3px #3D404B',
            boxShadowContainer: '6px 6px 10px #292C33, -6px -6px 10px #3D404B',
        },
        columns: {
            boxShadowColumn: '6px 6px 10px #292C33, -6px -6px 10px #3D404B',
            boxShadowEvent: '-4px -4px 6px #3D404B, 4px 4px 6px #292C33',
        },
        addEvent: {
            smallInput:
                'inset -2px -2px 4px #3D404B, inset 2px 2px 4px #292C33',
            smallButton: '-2px -2px 4px #3D404B, 2px 2px 4px #292C33',
        },
    },
};
