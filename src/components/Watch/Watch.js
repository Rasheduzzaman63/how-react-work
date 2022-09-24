import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Dial from '../Dial/Dial';
import Display from '../Display/Display';
import Table from '../Table/Table';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increaseSteps = () =>{
        const newSteps = steps + 1;
        setSteps(newSteps)
    }
    
    useEffect( () =>{
        console.log(steps)
    }, [steps])

    return (
        <div style={{border:'2px solid gray', margin:'10px'}}>
            <h4>This is smart Watch</h4>
            <h3>Current Step: {steps}</h3>
            <button onClick={increaseSteps}>Total Step</button>
            <Display name = "Rasheduzzaman" steps={steps}></Display>
            <Dial steps={steps}></Dial>
            <Table></Table>

        </div>
    );
};

export default Watch;