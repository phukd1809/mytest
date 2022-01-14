import React, { useState } from 'react';
import './style.css'   
    
function Input({setChange}) {
    const onChange = (e)=>
    {
        setChange(e.target.value)
    }
    return (
        <div className='form-input'>
            <input onChange={(e) => onChange(e)} type='text' placeholder='Nhập vào đây'/>
        </div>
    );
}

export default Input;