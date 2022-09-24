import React from 'react';

const Display = (props) => {
    return (
        <div style={{border:'2px solid gray', margin:'20px'}}>
            <h2>Name : {props.name}</h2>
            <h4>So Far Step: {props.steps}</h4>
        </div>
    );
};

export default Display;