import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';

import MyNav from "./MyNav";
import Watch from './Watch';
import DigitalClock from "./DigitalClock";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MyNav/>
            <Routes>
                <Route path='/' element={<Navigate to="watch" replace />} />
                <Route element={<Watch/>} path='watch'/>
                <Route element={<DigitalClock/>} path='digital-clock'/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

