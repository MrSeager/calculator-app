import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

const ButtonScript = ({value, currTheme, handleResult}) => {
    const handleClick = () => {
        
        switch (value) {
            case '+':
            case '-':
            case 'x':
            case '/':
            case '.':
            case '=':
            case 'del':
            case 'reset':
                handleResult(value);
            break;
            default:
                handleResult(value.toString());
            }
    }

    return <Button onClick={handleClick} value={value} className={`w-100 py-1 px-0 fs-4 ${currTheme}`}>{value}</Button>
};

export default ButtonScript;