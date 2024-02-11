import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            {/*<button onClick={props.helloHandler}>Hello Parents</button>*/}
            <button onClick={
                () => props.helloHandler('Child')
            }>Hi Parents</button>
        </div>
    );
}

export default ChildComponent;