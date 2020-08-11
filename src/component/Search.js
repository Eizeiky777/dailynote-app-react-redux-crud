import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import axios from "axios";
import { connect } from "react-redux";
import { goals } from '../redux/actions/goals';


const Search = ({  goal, remove }) => {

    const [data, setData] = useState([])
    // const [date, setDate] = useState('');

    const handleChange = async (e) => {
        if (e.key === "Enter") {
            let y = ''
            if (e.target.value === 'urgent') y = "#ff4f5b50";
            if (e.target.value === 'normal') y = "#cce6ff";
            if (e.target.value === 'low') y = "#d5ff8c";

            // let test = "I know you are";
            // `/'here my words'\w{0}/g` 
            console.log(e.target.value)
            var re = new RegExp(e.target.value + "\\w{0}", "g");

            let x = goal.data.filter(item => item.name === e.target.value || item.category === y || item.desc.match(re) )
            let resultMapping = x.map(item =>{ return (item) })
            setData(resultMapping)

            //  simple API
            // var url = "http://worldtimeapi.org/api/ip"
            // await axios.get(url).then(response => console.log(response.data));
        }
    }   
    
    return(

        <>
            <Container className="mt-5">
                <Row>
                    <Col xs></Col>
                    <Col xs>
                    <div>
                        <p className="text-center font-weight-bolder"> - Search - </p>
                    </div>
                    <input
                        type="text"
                        className="form-control text-capitalize"
                        placeholder="Search"
                        onKeyPress={handleChange}
					/>
                    </Col>
                    <Col xs>
                    </Col>
                </Row>
            
                <Row>
                    <Col></Col>
                    <Col xs>
                        <div className="mx-5" style={{display: 'flex', flexDirection:'column', justifyContent: 'center', marginTop: 10}}>
                            {
                                data ?
                                data.map((e, index) => {
                                        return(
                                                <div key={index} style={{display: 'flex',alignItems: 'center', justifyContent: 'space-between', paddingBottom: 5}}>
                                                    <div style={{width: 400, height: '100%', backgroundColor: `${e.category}`}}>
                                                        <span style={{fontSize: 17, fontWeight: 'bold'}}>{e.name}</span>
                                                    </div>
                                                    <div style={{width: 150, textAlign: 'center'}} >
                                                        <Button onClick={() => remove(e.ids)} className="btn-danger">X</Button>
                                                    </div>
                                                    <div style={{width: 300}}>  
                                                        {e.desc}
                                                    </div>
                                                </div>
                                        )
                                    }) :
                                <div></div>
                                
                            }
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        goal: state.goal
    };
};

export default connect(mapStateToProps, {  goals })(Search);
