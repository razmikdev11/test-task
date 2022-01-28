import React, {useState} from 'react'
import CardGrid from '../components/Card/CardGrid'
import CardLine from "../components/Card/CardLine";
import {books} from '../utils/mockData'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import gridIcon from '../icons/grid.png';
import listIcon from '../icons/list.png';

const Book = (props) => {
    const [listStyle, setListStyle] = useState('grid')
    const [bookItems, setBookItems] = useState(books)
    const {darkMode, setDarkMode} = props;

    const darkModeStyle = darkMode ? '#000' : '#fff';
    const fontStyles = darkMode ? {color: '#f5f5f5'} : {color: '#000'}

    const switchMode = () => {
        setDarkMode(!darkMode)
    }

    const changeListStyle = str => {
        setListStyle(str)
    }

    const searchHandler = e => {
        const filteredItems = books.filter(i => {
            let searchedName = e.target.value;
            return i.title.toLowerCase().includes(searchedName.toLowerCase())
                || i.author.toLowerCase().includes(searchedName.toLowerCase())
                || i.genre.toLowerCase().includes(searchedName.toLowerCase())
                || i.description.toLowerCase().includes(searchedName.toLowerCase())
        })
        setBookItems(filteredItems)
    }

    return (
            <div style={{backgroundColor: darkModeStyle}}>
                <Row style={{borderBottom: '1px solid #ccc'}} className='m-0 p-3'>
                    <Col md={4}>
                        <h4 style={fontStyles}>Book Library</h4>
                    </Col>
                    <Col md={8}>
                        <div className='d-flex align-items-center justify-content-end'>
                            <div className={`grid-list-button ${listStyle === 'grid' ? 'active':''} ${darkMode ? 'darkMode' : ''}`} onClick={() => changeListStyle('grid')}>
                                {
                                    !darkMode ?
                                        <img src={gridIcon} alt="grid"/>
                                        :
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.75" y="0.75" width="6" height="6" rx="1.5" stroke="#F9F9F9" stroke-width="1.5"/>
                                            <rect x="0.75" y="11.25" width="6" height="6" rx="1.5" stroke="#F9F9F9" stroke-width="1.5"/>
                                            <rect x="11.25" y="0.75" width="6" height="6" rx="1.5" stroke="#F9F9F9" stroke-width="1.5"/>
                                            <rect x="11.25" y="11.25" width="6" height="6" rx="1.5" stroke="#F9F9F9" stroke-width="1.5"/>
                                        </svg>
                                }

                            </div>
                            <div className={`grid-list-button ${listStyle !== 'grid' ? 'active':''} ${darkMode ? 'darkMode' : ''}`} onClick={() => changeListStyle('line')}>
                                {
                                    !darkMode ?
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="10.5" width="18" height="1.5" fill="#000000"/>
                                            <rect x="3" y="15" width="12" height="1.5" fill="#000000"/>
                                            <rect x="3" y="6" width="12" height="1.5" fill="#000000"/>
                                            <rect y="1.5" width="18" height="1.5" fill="#000000"/>
                                        </svg>

                                        :
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="10.5" width="18" height="1.5" fill="#969696"/>
                                            <rect x="3" y="15" width="12" height="1.5" fill="#969696"/>
                                            <rect x="3" y="6" width="12" height="1.5" fill="#969696"/>
                                            <rect y="1.5" width="18" height="1.5" fill="#969696"/>
                                        </svg>

                                }
                            </div>
                            <InputGroup size="sm" className={`searchInputDesktop ${darkMode?'darkMode':''}`}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5ZM12.2465 13.3072C10.9536 14.3652 9.30095 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.30095 14.3652 10.9536 13.3072 12.2465L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12.2465 13.3072Z"
                                          fill="#696969"/>
                                </svg>
                                <FormControl aria-label="Small"
                                             placeholder={'Search for Keywords...'}
                                             aria-describedby="inputGroup-sizing-sm"
                                             onChange={searchHandler}
                                />
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
                <Row className='m-0 p-3'>
                    <InputGroup size="sm" className={`searchInputMobile ${darkMode ? 'darkMode' : ''}`}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5ZM12.2465 13.3072C10.9536 14.3652 9.30095 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.30095 14.3652 10.9536 13.3072 12.2465L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12.2465 13.3072Z"
                                  fill="#696969"/>
                        </svg>
                        <FormControl aria-label="Small"
                                     placeholder={'Search for Keywords...'}
                                     aria-describedby="inputGroup-sizing-sm"
                                     onChange={searchHandler}
                        />
                    </InputGroup>
                    {
                        listStyle === 'grid'
                            ? bookItems?.map(book => <CardGrid key={book.id} book={book} darkMode={darkMode}/>)
                            : <Table hover>
                                <thead>
                                <tr>
                                    <th>Book Title & Author</th>
                                    <th>Genre</th>
                                    <th>Reading Progress</th>
                                    <th>Last Opened</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    bookItems?.map(book => <CardLine key={book.id} book={book}/>)
                                }
                                </tbody>
                            </Table>
                    }
                </Row>
            </div>
    )
}

export default Book
