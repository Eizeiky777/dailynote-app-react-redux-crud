import React, { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { connect } from "react-redux";
import { addTodo } from '../redux/actions/index';

const TodoAdd = ({move, addTodo, todo, setList, list}) => {

    const [dataAdd, setDataAdd] = useState([])
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [detail, setDetail] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        let ids = Math.random() * 10000
        let data = {
            id: ids,
            title: title,
            category: category,
            date: date,
            detail: detail
        }
        // setDataAdd for noti
        setDataAdd([...dataAdd, data])
        // setList into parent
        setList([...list, data])
        // redux
        addTodo(data)
        // timer 
        setTimeout(function(){ 
            setDataAdd([])
        }, 500);
    }

    return(
        <>
            <Row  style={{backgroundColor: '#ff666650' }}>
                <Col xs style={{alignSelf: 'center'}}>
                    <h5 className="my-2">My Plan - Add</h5>
                    <div className="d-flex justify-content-between">
                        <Button variant="primary" size="md" className="my-3 mr-1" block onClick={onSubmit} >
                            ADD NOW +
                        </Button>
                        <Button variant="primary" size="md" className="my-3 ml-1" block onClick={move} >
                            BACK TO LIST
                        </Button>
                    </div>
                    <span>:: </span>
                    <span className="text-success">{dataAdd.length !== 0 && ('successfully added')} </span>
                    <div className="d-flex my-3">
                        <Form className="w-100">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="write your schedule here" onChange={(e) => setTitle(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Important level</Form.Label>
                                <Form.Control as="select" onChange={(e) => setCategory(e.target.value)}>
                                <option>select category</option>
                                <option value="urgent">urgent</option>
                                <option value="normal">normal</option>
                                <option value="low">low</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" onChange={(e) => setDate(e.target.value)}/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Details</Form.Label>
                                <Form.Control as="textarea" rows="3" onChange={(e) => setDetail(e.target.value)}/>
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

export default connect(mapStateToProps, {  addTodo })(TodoAdd);