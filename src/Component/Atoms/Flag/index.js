import React from 'react';
import './style.css'

function Flag(props) {
    return (
        <div className='flag'>
            <img src={props.flag}/>
        </div>
    );
}

export default Flag;