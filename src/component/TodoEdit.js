import React, { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { connect } from "react-redux";
import { addTodo } from '../redux/actions/index';

const TodoEdit = ({update, list, pos}) => {

    const [title, setTitle] = useState(list[pos].title)
    const [category, setCategory] = useState(list[pos].category)
    const [date, setDate] = useState(list[pos].date)
    const [detail, setDetail] = useState(list[pos].detail)

    const handleSubmit = (e) => {
        let datas = {
            title: title,
            category: category,
            date: date,
            detail: detail
        }
        update(datas, e)
    }

    return(
        <>
            <Row  style={{backgroundColor: '#ff666650' }}>
                <Col xs style={{alignSelf: 'center'}}>
                    <h5 className="my-2">My Plan - Update</h5>
                    <Button variant="primary" size="md" className="my-3" block onClick={() => handleSubmit(pos)} >
                        UPDATE NOW +
                    </Button>
                    <div className="d-flex my-3">
                        <Form className="w-100">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder={list[pos].title} onChange={(e) => setTitle(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Important level</Form.Label>
                                <Form.Control as="select" onChange={(e) => setCategory(e.target.value)} >
                                    <option>select category</option>
                                    <option value="urgent">urgent</option>
                                    <option value="normal">normal</option>
                                    <option value="low">low</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder={list[pos].date} onChange={(e) => setDate(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Details</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder={list[pos].detail} onChange={(e) => setDetail(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps, {  addTodo })(TodoEdit);