import React, {useState} from 'react';
import Heading from '../../Atoms/Heading';
import Text from '../../Atoms/Text';
import Input from '../../Atoms/Input';
import './style.css'

function Banner(props) {
    const  [change, setChange] = useState('abc')
    return (
        <div className='bgr'>
            <img src='images/banner.jpg'/>
            <div className='banner-content'>
                <Heading/>
                <Text change={change}/>
                <Input setChange={setChange}/>
            </div>
        </div>

    );
}

export default Banner;