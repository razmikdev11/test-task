import React from 'react'

const CardLine = ({ book, onHide }) => {
    return (
        <tr onClick={() => onHide(true)}>
            <td>
                <h6>{book.title}</h6>
                <p>{book.author}</p>
            </td>
            <td>{book.genre}</td>
            <td>{book.progress}</td>
            <td>{book.lastOpened}</td>
        </tr>
    )
}

export default CardLine