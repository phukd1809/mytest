import {useCallback, useEffect, useMemo, useState} from 'react';

import './About.css'

function About()
{
    
    return (
        <div className='bgx'>
            <img src='images/company.jpg'/>
            <div className='about-content'>
               <h1>会社情報</h1>
               <p>新たなプロジェクトのための完璧な選択</p>
            </div>
        </div>
    )
}
export default About