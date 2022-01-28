import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import AddBook from './pages/Add-book'
import './App.css';
import Sidebar from "./layout/SideBar";
import Col from "react-bootstrap/Col";
import React, {useState} from "react";
import {Container, Row} from "react-bootstrap";
import darkModeIcon from './icons/dark-mode-icon.png'

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const switchMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <BrowserRouter>
            <Row className='m-0'>
                <Col md={12} lg={3} className='p-0 sidebar'>
                    <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
                </Col>
                <Col className={`mobile-navbar ${darkMode ? 'darkMode' : ''}`} onClick={switchMode}>
                    <img src={darkModeIcon} alt="dark-icon" className='img-fluid'/>
                </Col>
                <Col md={12} lg={9} className='p-0'>
                    <Routes>
                        <Route path={'/'} element={<Home/>} exact/>
                        <Route path={'/books'} element={<Books darkMode={darkMode}/>} exact/>
                        <Route path={'/create-book'} element={<AddBook />} exact/>
                    </Routes>
                </Col>
            </Row>
        </BrowserRouter>
    );
}

export default App;
