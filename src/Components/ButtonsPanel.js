import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import ButtonScript from './ButtonNumber';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';

const ButtonsPanel = ({ currTheme, numb, setNumb, result, setResult}) => {
    const [currSign, setCurrSign] = useState(null);
    const [prevSign, setPrevSign] = useState('+');

    const handleSign = (sign) => {
        if (numb === '') {
            setNumb(0 + parseFloat(numb));
        } else if (sign === '+') {
            if (prevSign === '-')
                setResult(result - parseFloat(numb));
            else if (prevSign === 'x')
                setResult(result * parseFloat(numb));
            else if (prevSign === '/')
                setResult(result / parseFloat(numb));
            else 
                setResult(result + parseFloat(numb));
        } else if (sign === '-') {
            if (prevSign === '+')
                setResult(result + parseFloat(numb));
            else if (prevSign === 'x')
                setResult(result * parseFloat(numb));
            else if (prevSign === '/')
                setResult(result / parseFloat(numb));
            else 
                setResult(result - parseFloat(numb));
        } else if (sign === 'x') {
            if (prevSign === '+')
                setResult(result + parseFloat(numb));
            else if (prevSign === '-')
                setResult(result - parseFloat(numb));
            else if (prevSign === '/')
                setResult(result / parseFloat(numb));
            else
                setResult(result * parseFloat(numb));
        } else if (sign === '/') {
            if (prevSign === '+')
                setResult(result + parseFloat(numb));
            else if (prevSign === '-')
                setResult(result - parseFloat(numb));
            else if (prevSign === 'x')
                setResult(result * parseFloat(numb));
            else 
                setResult(result / parseFloat(numb));
        }
        setPrevSign(sign);
        setCurrSign(sign);
        setNumb('');
    }

    const handleResult = (e) => {
        switch (e) {
            case '+':
                handleSign(e);
                break;
            case '-':
                handleSign(e);
                break;
            case 'x':
                handleSign(e);
                break;
            case '/':
                handleSign(e);
                break;
            case '=':
                switch (currSign) {
                    case '+':
                        setResult(result + parseFloat(numb));
                        setNumb('');
                        break;
                    case '-':
                        setResult(result - parseFloat(numb));
                        setNumb('');
                        break;
                    case 'x':
                        setResult(result * parseFloat(numb));
                        setNumb('');
                        break;
                    case '/':
                        setResult(result / parseFloat(numb));
                        setNumb('');
                        break;
                    default:
                        break;
                    }
                    setPrevSign('+');
                    setCurrSign(e);
                    break;
            case '.':
                if (Number.isInteger(parseFloat(numb)))
                    setNumb(prevNumb => prevNumb + e);
                break;
            case 'reset':
                setResult(0);
                setPrevSign('+');
                setNumb('');
                break;
            case 'del':
                setNumb(numb.substring(0, numb.length - 1));
                break;
            default:
                if (currSign === '=' && prevSign === '+') {
                    setResult(0);
                    setNumb(prevNumb => prevNumb + e);
                }
                else
                    setNumb(prevNumb => prevNumb + e);
        }
    }

    return (
        <Container className={`rounded p-4 cs-item-2-bg-${currTheme}`}>
            <Row className='mb-3'>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={1} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={2} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={3} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={'del'} currTheme={'text-uppercase cs-bt-1-' + currTheme} />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={4} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={5} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={6} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={'+'} currTheme={'cs-bt-' + currTheme} />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={7} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={8} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={9} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={'-'} currTheme={'cs-bt-' + currTheme} />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={'.'} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={0} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={'/'} currTheme={'cs-bt-' + currTheme} />
                </Col>
                <Col xs={3} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={'x'} currTheme={'cs-bt-' + currTheme} />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col xs={6} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={'reset'} currTheme={'text-uppercase cs-bt-1-' + currTheme} />
                </Col>
                <Col xs={6} className='px-3'>
                    <ButtonScript handleResult={handleResult} value={'='} currTheme={'cs-bt-2-' + currTheme} />
                </Col>
            </Row>
        </Container>
    );
}

export default ButtonsPanel;