import React from 'react'

import './Person.css'

const person = (props) => {
    return (
        <div className="Person" onClick={props.myClickFunction}>
            <h3>{props.name}</h3>
            <h3>{props.age} years old</h3>
            <spam>{props.children}</spam>
        </div>
    )
}

export default person;