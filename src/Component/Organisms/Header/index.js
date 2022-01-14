import React from 'react';
import './style.css'
import Logo from '../../Atoms/Logo';
import NavBar from '../../Molecules/Navbar';
import GroupFlag from '../../Molecules/GroupFlag';

function Header(props) {
    return (
        <div className='header'>
            <Logo logo="images/logoreactplus.png"/>
            <NavBar/>
            <GroupFlag/>
        </div>
    );
}

export default Header;