import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Icons(){
    return(
        <div>
            <FacebookIcon  
                style={{fontSize: 200 }}
                className='fb'
                onClick={() => window.open('https://www.facebook.com/sierra.knight.33')}
            />
            <InstagramIcon  
            style={{fontSize: 200}}
            className='ig'
            onClick={() => window.open('https://www.instagram.com/honeycharcuterieco/')}
            
            />
        </div>
    )
}


export default Icons;