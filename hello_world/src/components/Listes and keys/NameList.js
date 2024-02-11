import React from 'react';
import Person from './Person';

function NameList(props) {
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
        <Person key = {person.id} person = {person}></Person>
        )
    return (
        <div>
            <div>
                {personList}
            </div>


        </div>

    );
}

export default NameList;