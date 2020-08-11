import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const TodoSearch = ({handleSearch}) => {
    return (
        <>
            <Row  style={{backgroundColor: '#bada55', }}>
                    <Col xs style={{alignSelf: 'center'}}>
                        <div className="d-flex pt-3">
                            <Form.Group controlId="formBasicText" className="w-75 mr-2">
                                    <Form.Control type="text" onKeyPress={handleSearch} onChange={handleSearch}
                                    placeholder="Search" />
                            </Form.Group>
                            <Button variant="primary" style={{height: 40}} className="w-25" onClick={(e) => handleSearch(e, true)}>
                                Search
                            </Button>
                        </div>
                    </Col>
                </Row>
        </>
    )
}

export default TodoSearch;