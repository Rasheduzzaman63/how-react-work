import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid black', margin:'10px'}}>
            <h3>Dial Work</h3>
            <p>This is Another Step: {props.steps}</p>
        </div>
    );
};

export default Dial;