import React, { useState } from 'react';
import { Form, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { fetchDeezer } from '../config/API/deezer';

const DataArtist = ({album}) => {
    
    const albumData = album.map((e, index) =>{
        return(
            <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid black'}}>
                <div>
                    <span style={{fontSize: 11}}>{e.album.title ? e.album.title : "Loading ...." }</span> 
                </div>
                <div>
                    <span style={{fontSize: 11}}>{e.title ? e.title : "Loading ...." }</span> 
                </div>
            </div>
        )
    })

    return(
        <>
            {album.length ? albumData : <p className="text-center">awaiting input ...</p>}
        </>
    )
}



const Note = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(0);



    const Searching = async (e) => {
        if( e.key === 'Enter') {
            // console.log(e.target.value)
            var fetchData = '';
            if ( !e.target.value){
                fetchData = await fetchDeezer('eminem', setLoad)
            }else{
                fetchData = await fetchDeezer(e.target.value)
            }

            // console.log(fetchData.data.data)
            setData(fetchData.data.data)
        }
    }

    console.log(data)
    return(
        <>
            <div>
                <ProgressBar animated now={load} />
            </div>
            <Container className="my-5">
                <Row>
                    <Col sm={3}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Search Artist</Form.Label>
                            <Form.Control type="text" placeholder="name" onKeyPress={Searching} />
                        </Form.Group>
                    </Col>
                    <Col sm={9} >
                        <div style={{border: '1px solid gray', padding: 10, overflow: 'auto', height: 500}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 40, paddingRight: 40}}>
                                <p className="text-center">Album </p>
                                <p className="text-center">Title</p>
                            </div>
                            <DataArtist album={data}/>
                        </div>
                    </Col>
    
                </Row>
            </Container>
        </>
    )
}

export default Note;