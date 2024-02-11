import React from 'react';

function Person({person}) {
    return (
        <div>
            <h1>{person.name}</h1>
            <p>{person.age}</p>
            <p>{person.skill}</p>
        </div>
    );
}

export default Person;