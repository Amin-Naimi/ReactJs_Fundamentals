import React from 'react';

function NameList(props) {
    const names = ['Mohamed', 'Malika', 'Redtha','Mohamed']
    //const namesList = names.map(name =><h2 key={name}>{name}</h2>)
    const namesList = names.map((name, index) =><h2 key={index}>{name} {index}</h2>)
    return (
      <div>{namesList}</div>
    );
}

export default NameList;