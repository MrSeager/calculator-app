import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ButtonsPanel from './Components/ButtonsPanel';
import NavbarPanel from './Components/NavbarPanel';
import DisplayPanel from './Components/DisplayPanel';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const CalcScript = () => {
    const [currTheme, setCurrTheme] = useState(1);
    const [numb, setNumb] = useState('');
    const [result, setResult] = useState(0);

    AOS.init();

    return (
        <Container fluid className={`cs-bg-${currTheme} cs-h d-flex flex-column justify-content-center align-items-center`}>
            <Container data-aos="fade-down" className='cs-w my-5'>
                <NavbarPanel currTheme={currTheme} setCurrTheme={setCurrTheme} />
                <Container>
                    <DisplayPanel currTheme={currTheme} numb={numb} result={result} />
                    <ButtonsPanel currTheme={currTheme} numb={numb} setNumb={setNumb} result={result} setResult={setResult} />
                </Container>
            </Container>
        </Container>
    );
};

export default CalcScript;