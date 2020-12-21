import React from 'react';
import Main from './Views/Main';
import GlobalStyles from './Styled/Global/GlobalStyles';
import Login from './Views/Login';
import Register from './Views/Register';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Register />
        </>
    );
};

export default App;
