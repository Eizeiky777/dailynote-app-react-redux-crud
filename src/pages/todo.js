import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import { addTodo } from '../redux/actions/index';

import TodoEdit from '../component/TodoEdit';
import TodoAdd from '../component/TodoAdd';
import TodoSearch from '../component/TodoSearch';

// mapper
import { TodoM } from '../mapper/todoM';


const Todo = ({ todo }) => {


const [list, setList] = useState([])
const [listIndex, setListIndex] = useState('')

const [temp, setTemp] = useState([])
const [search, setSearch] = useState(false)
const [searchVal, setSearchVal] = useState('')

const [moveList, setMoveList] = useState(true)
const [moveUpdate, setMoveUpdate] = useState(false)
const [moveAdd, setMoveAdd] = useState(false)

const handleEdit = (index) => {
    setMoveList(!moveList)
    setMoveUpdate(!moveUpdate)
    setListIndex(index)
}

const handleAdd = () => {
    setMoveList(!moveList)
    setMoveAdd(!moveAdd)
}

// execute add 
const handleAddNewAgenda = () => {
    setMoveList(!moveList)
    setMoveAdd(!moveAdd)
}

// execute update
const handleUpdateNewAgenda = (datas, e) => {
    setMoveList(!moveList)
    setMoveUpdate(!moveUpdate)
    // update certain array 
    let myList = list
    myList[e].title = datas.title
    myList[e].category = datas.category
    myList[e].date = datas.date
    myList[e].detail = datas.detail
    setList(myList)
}

// execute delete
const handleDelete = (id) => {
    const removed = list.filter((item) => item.id !== id);
    setList(removed)
}
// execute search
const handleSearch = (event, bool) => {
    setSearchVal(event.target.value)
    if ( event.key === 'Enter' ){
        let re = new RegExp(event.target.value + "\\w{0}", "g");
        let searchs = list.filter(item => item.title === event.target.value || item.category === event.target.value || item.detail.match(re) )
        console.log(searchs)
        setSearch(!search)
        setTemp(searchs)
    }else if (bool){
        let re = new RegExp(searchVal + "\\w{0}", "g");
        let searchs = list.filter(item => item.title === searchVal || item.category === searchVal || item.detail.match(re) )
        console.log(searchs)
        setSearch(!search)
        setTemp(searchs)
    }
    
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return(
        <div>
            <Container>
                { <TodoSearch handleSearch={handleSearch} />}
                {
                    moveList && ( 
                        <Row  style={{backgroundColor: '#ff666650' }}>
                                <Col xs style={{alignSelf: 'center'}}>
                                    <Link to="/"><h5 className="my-2 text-dark">My Plan - Link to Login</h5></Link>
                                    <Button variant="primary" size="md" className="my-3" block onClick={handleAddNewAgenda}>
                                        ADD NEW AGENDA +
                                    </Button>
                                    { <TodoM list={search ? temp : list} handleEdit={handleEdit} handleDelete={handleDelete} /> }
                            </Col>
                        </Row>
                    )
                }
                {
                    moveUpdate && (<TodoEdit update={handleUpdateNewAgenda} list={list} pos={listIndex} />)
                }
                {
                    moveAdd && (<TodoAdd move={handleAdd} setList={setList} list={list}/>)
                }
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps, {  addTodo })(Todo);