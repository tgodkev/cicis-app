import React from 'react';
import Delicatessen from './delicatessen.png'

function Header(){
    return(
        <div className='header'>
            <h1>Cici's Charcuterie.</h1>
            <img src={Delicatessen} alt="" />
        </div>
    )
}

export default Header;