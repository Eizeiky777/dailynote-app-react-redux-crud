import React from 'react';
import { Button } from 'react-bootstrap';

export const TodoM = ({list, handleEdit, handleDelete}) =>{
    return list.map((e, index) => {
        return(
            <div className="d-flex my-3" key={index}>
                <span className="mr-2 pt-2 pl-2 border border-light shadow rounded" style={{background: '#f5f5dc', width: '100%'}}> {e.title} </span>
                <div className="d-flex">
                    <Button variant="success" style={{height: 40, width: '100%',marginRight: 5}} className='px-3' onClick={() => handleEdit(index)}>
                        <i className="fas fa-user-edit" />
                    </Button>
                    <Button variant="danger" style={{height: 40, width: '100%'}} className='px-3' onClick={() => handleDelete(e.id)} >
                        <i className="fas fa-backspace" />
                    </Button>
                </div>
            </div>
        )
    })
}