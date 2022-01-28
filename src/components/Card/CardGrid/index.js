import React from 'react'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from './card.module.css'

const CardItem = ({ book, onHide, darkMode }) => {
    return (
        <Col className={'mb-3'} onClick={() => onHide(true)}>
            <Card className={styles.card}>
                <Card.Img variant="top" src={book.img} className={styles.cardImg}/>
                <Card.Body className={`p-3 ${darkMode ? 'dark' : ''}`}>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.author}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardItem
