import React from 'react';
import Honey from './honey.png';
import Icons from './Icons';

function Header(){
    return(
        <div className='header'>
            <h1>Honey Charcuterie Co.</h1>
            <img src={Honey} alt="" />
            <Icons />
        </div>
    )
}

export default Header;