import React from 'react';
import Person from './Person';

function NameList(props) {
    const names = ["Mohamed", "Redtha", "Malika"]
    const nameList = names.map(name => <h1>{name}</h1>)
    const persones = [
        {
            id: 1,
            name: "Mohamed",
            age: 20,
            skill: 'Angular'
        },
        {
            id: 2,
            name: "Redtha",
            age: 30,
            skill: 'ReactJS'
        }, {
            id: 3,
            name: "Malika",
            age: 40,
            skill: 'VueJS'
        }

    ]
    const personList = persones.map(person =>
        <Person person = {person}></Person>
        )
    return (
        <div>
            {/*<div>
                <h2>{names[0]}</h2>
                <h2>{names[1]}</h2>
                <h2>{names[2]}</h2>
            </div>*/}
            <div>
                {/*{nameList}*/}
                {personList}
            </div>


        </div>

    );
}

export default NameList;