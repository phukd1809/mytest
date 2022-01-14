import React from 'react';
import Flag from '../../Atoms/Flag';
import './style.css'

function GroupFlag(props) {
    return (
        <div className='groupflag'>
            <Flag flag="/images/vn.png"/>
            <Flag flag="/images/co-nhat.png"/>
        </div>
    );
}

export default GroupFlag;