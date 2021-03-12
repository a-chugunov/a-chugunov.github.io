import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import AppLayout from './components/AppLayout';

import themeDark from './themes/themeDark';
import themeLight from './themes/themeLight';

function App() {
    const [isThemeLight, changeIsThemeLight] = useState(true);

    const changeTheme = () => {
        changeIsThemeLight(!isThemeLight);
    };

    return (
        <div className="App">
            <ThemeProvider theme={isThemeLight ? { ...themeLight } : { ...themeDark }}>
                <CssBaseline />
                <BrowserRouter>
                    <AppLayout themeToggler={changeTheme} themeType={isThemeLight} />
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
