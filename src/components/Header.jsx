import React from 'react';
import Cheese from './cheese.png'

function Header(){
    return(
        <div className='header'>
            <h1>Cici's SharkCoochie.</h1>
            <img src={Cheese} alt="" />
        </div>
    )
}

export default Header;