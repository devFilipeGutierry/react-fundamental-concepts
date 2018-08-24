import React from 'react'

import './Person.css'

const person = (props) => {
    return (
        <div className="Person" onClick={props.click}>
            <h3>{props.name}</h3>
            <h3>{props.age} years old</h3>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;