import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Search from '../component/Search';

import { connect } from "react-redux";
import { goals } from '../redux/actions/index';

const InputSearch = ({ goals, goal, logins }) => {

    const [list, setList] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [desc, setDesc] = useState('');
    const [ids, setIds] = useState(Math.random() * 10000);

    const [updating, setUpdating] = useState(true);
    const [slash, setSlash] = useState([])

    const Add = async(e) => {
        e.preventDefault()
        const newItem = {
            name: name,
            category: category,
            desc: desc,
            ids: ids
        };
        const updatedItem = [ ...list, newItem ];
        setList(updatedItem)
        // redux
        goals(updatedItem)
        // setState
        setName('');
        setDesc('');
        setIds(Math.random() * 10000);
    }

    const handleChangeName = (event) => {
		setName(event.target.value)
    };
    const handleChangeDesc = (event) => {
		setDesc(event.target.value)
    };
    const handleChangeCategory = (event) => {
        setCategory(event.target.value)
    }
    const handleUpdate = (e) => {
        for (let x=0 ; x < list.length; x++){
            if (list[x].ids === ids ){
                list[x].name = name;
                list[x].desc = desc;
                list[x].category = category;
                setIds('');
                setName('');
                setDesc('');
                setCategory('');
            }
        }
        e.preventDefault()
        setUpdating(true)
        
    }

    const update = (x) => {
        let upd = list.filter((e) => e.ids === x)
        upd.forEach((f, index) => {
            setIds(f.ids);
            setName(f.name);
            setUpdating(false);
        })
    }

    const remove = (e) => {
        const removed = list.filter((item) => item.ids !== e);
		setList(removed);
    }

    const dones = (x, i, n) => {
        slash[i] = x
        setSlash(slash)
        setName(n)
    }

    useEffect(() => {
        
    },[name]);
    
    const myList =  list.map((e, index) => {
        return(
            <div style={{position: 'relative'}} key={index} >
                <div key={index} style={{display: 'flex',alignItems: 'center', justifyContent: 'space-between', paddingBottom: 5}}>
                    <div style={{width: 200, height: '100%', backgroundColor: `${e.category}`}}>
                        <span style={{fontSize: 17, fontWeight: 'bold'}}>{e.name}</span>
                    </div>
                    <div style={{width: 50}}>
                        <Button onClick={() => update(e.ids)} className="btn-success">update</Button>
                    </div>
                    <div style={{width: 50, textAlign: 'right'}}>
                        <Button onClick={() => remove(e.ids)} className="btn-danger">X</Button>
                    </div>
                    <div style={{width: 50}}>
                        <Form.Check 
                            type="checkbox"
                            onClick={async() => await dones(e.ids, index, e.name)}
                        />
                    </div>
                    <div style={{width: 100}}>  
                        {e.desc}
                    </div>
                </div>
                {   e.ids === slash[index] &&  <div style={{position: 'absolute',width: '100%', height: 5,backgroundColor: 'red', top: 15, }}></div>}
            </div>
        )
    })

    // get data from redux
    const user = Object.values(logins);

    return (
        <div className="InputSearch">
            <div className="text-center p-5" style={{fontSize: 25, fontWeight: 'bold'}}>My List </div>
            <p className="text-center" style={{fontSize: 20}}>Hello { isNaN(user[0]) ? user[0].email : 'loading...'}</p>
            {<Search list={list} remove={remove}/>}
            <Container>
                <Row>
                    <Col xs className="p-3">
                        <Form onSubmit={Add}>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" onChange={handleChangeName} 
                                placeholder="Enter your activity" value={name} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" onChange={handleChangeCategory}>
                                    <option value="red">Select category</option>
                                    <option value="#ff4f5b50">Urgent</option>
                                    <option value="#cce6ff">Normal</option>
                                    <option value="#d5ff8c">Low</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description : </Form.Label>
                                <Form.Control as="textarea" rows="3"  onChange={handleChangeDesc} value={desc} />
                            </Form.Group>
                            {
                                updating ? (<Button variant="primary" type="submit">
                                    Add
                                </Button>) : (<Button variant="secondary" onClick={handleUpdate}>
                                    Update
                                </Button>)
                            }
                        </Form>
                    </Col>  
                    <Col xs className="p-3">
                        <div className="text-center">My Current list & activity</div>
                        <div className="mt-3">
                            {myList}
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        goal: state.goal,
        logins: state.login
    };
};

export default connect(mapStateToProps, {  goals })(InputSearch);
