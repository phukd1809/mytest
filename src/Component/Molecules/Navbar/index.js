import React, {Component} from 'react';
import {Routes, Route, Switch, Link} from 'react-router-dom';
import './style.css'

function NavBar(props) {
    return (
        <div className='navbar'>
            <Link to='/'> ホーム</Link>
            <Link to='/about'>会社情報</Link>
            <Link to='/service'>サービス</Link>
            <div className='dropdown'>
                <Link to='/technical'>テクニカルスタック</Link>
                <div className='drop'>
                    <Link to='/technical'>Reactのテクニカルスタック</Link>
                    <Link to='/technical/react-native'>React Nativeのテクニカルスタック</Link>
                    <Link to='/technical/codesample'>CodeSample</Link>
                </div>
            </div>
            <Link to='/team'>当社のチーム </Link>
            <Link to='/project'>プロジェクト</Link>
            <Link to='/contact'>お問い合わせ</Link>
        </div>
    );
}

export default NavBar;