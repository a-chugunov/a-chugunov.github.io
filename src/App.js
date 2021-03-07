import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.css';

import AppLayout from './components/AppLayout';

const themeLight = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000'
        }
    }
});

const themeDark = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#c31e60',
            main: '#ff0067',
            dark: '#d00808',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000'
        }
    }
});

function App() {
    const [isThemeLight, changeIsThemeLight] = useState(true);

    const changeTheme = () => {
        changeIsThemeLight(!isThemeLight);
    };

    return (
        <div className="App">
            <CssBaseline />
            <ThemeProvider theme={isThemeLight ? { ...themeLight } : { ...themeDark }}>
                <BrowserRouter>
                    <AppLayout themeToggler={changeTheme} themeType={isThemeLight} />
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
