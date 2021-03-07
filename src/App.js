import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import './App.css';

import AppLayout from './components/AppLayout';

const theme = createMuiTheme({
    palette: {
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

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <AppLayout />
                </BrowserRouter>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
