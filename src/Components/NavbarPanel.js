import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';

const NavbarPanel = ({ currTheme, setCurrTheme }) => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand className={`pb-0 cs-fs cs-fc-${currTheme}`}>calc</Navbar.Brand>
                <Nav className='ms-auto'>
                    <Navbar.Text className={`mt-auto p-0 text-uppercase cs-fs-2 cs-fs cs-fc-${currTheme}`}>Theme</Navbar.Text>
                        <Container>
                            <Container className='p-0 d-flex flex-row justify-content-around align-items-center'>
                                <Navbar.Text className={`p-0 cs-fc-${currTheme}`}>1</Navbar.Text>
                                <Navbar.Text className={`p-0 cs-fc-${currTheme}`}>2</Navbar.Text>
                                <Navbar.Text className={`p-0 cs-fc-${currTheme}`}>3</Navbar.Text>
                            </Container>
                            <Form key='inline-radio' className={`rounded-pill d-flex flex-row align-items-center cs-item-2-bg-${currTheme}`} >
                                <div className=''>
                                    <Form.Check
                                        custom
                                        inline
                                        name="group1"
                                        type='radio'
                                        id='inline-radio-1'
                                        className='mx-1 cs-checkbox-1'
                                        onClick={() => setCurrTheme(1)}
                                        defaultChecked
                                    />
                                </div>
                                <div>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type='radio'
                                        id='inline-radio-2'
                                        className='mx-1 cs-checkbox-2'
                                        onClick={() => setCurrTheme(2)}
                                    />
                                </div>
                                <div>
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type='radio'
                                        id='inline-radio-3'
                                        className='mx-1 cs-checkbox-3'
                                        onClick={() => setCurrTheme(3)}
                                    />
                                </div>
                            </Form>
                        </Container>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default NavbarPanel;