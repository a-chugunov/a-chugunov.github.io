import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import AppLayout from './components/AppLayout';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </div>
    );
}

export default App;
