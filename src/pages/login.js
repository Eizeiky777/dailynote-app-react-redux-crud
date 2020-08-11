import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { login } from '../redux/actions/index';


const Login = ({ login }) => {
    let history = useHistory();
    const[mail, setMail] = useState('ueki')
    const[pass, setPass] = useState('1234')

    const onMail = (e) => {
        setMail(e.target.value)
    }

    const onPass = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(mail,pass)
        login(mail, pass);
        history.push('/todo');

    }

    return(
        <>
            <div className="text-center p-5" style={{fontSize: 25, fontWeight: 'bold'}}>Login </div>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text"
                                placeholder="Enter your activity" value={mail} onChange={onMail} />
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text"
                                placeholder="Enter your activity" value={pass} onChange={onPass} />
                            </Form.Group>
                            <div className="text-center" >
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        logins: state.login
    };
};

export default connect(mapStateToProps, {  login })(Login);