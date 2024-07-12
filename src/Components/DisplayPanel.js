import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';

const DisplayPanel = ({ currTheme, numb, result }) => {
    return (
        <Container className={`mb-4 p-4 rounded cs-item-1-bg-${currTheme}`}>
            <h1 className={`text-end m-0 cs-fc-${currTheme}`}>{numb === '' ? result : numb}</h1>
        </Container>
    );
};

export default DisplayPanel;