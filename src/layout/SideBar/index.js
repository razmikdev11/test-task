import React, {useState} from "react";
import {Link} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

import styles from './sidebar.module.css'

const Sidebar = (props) => {
    const {darkMode, setDarkMode} = props;

    const darkModeStyle = darkMode ? '#222' : '#fff';
    const fontStyles = darkMode ? {color: '#f5f5f5'} : {color: '#000'}

    const switchMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div style={{backgroundColor: darkModeStyle}}>
            <div className={styles.sidebar}>
                <ul>
                    <h4 style={fontStyles}>Library</h4>
                    <Nav.Item as="li" className={styles.navItem}>
                        <Link to={'/books'} style={fontStyles}>My Books</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to={'/create-book'} style={fontStyles}>Add new books</Link>
                    </Nav.Item>
                </ul>
                <ul>
                    <h4 style={fontStyles}>Settings</h4>
                    <Nav.Item as="li">
                        <Form>
                            <Form.Check
                                // disabled={darkMode}
                                type="switch"
                                id="custom-switch"
                                label="Dark Mode"
                                style={fontStyles}
                                onChange={switchMode}
                            />
                        </Form>
                    </Nav.Item>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;
