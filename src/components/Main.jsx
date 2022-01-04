import React from "react";
import car1 from './carcoochie1.jpg'
import car2 from './bgcar2.jpg'
import Button from '@mui/material/Button';




function Main()


{
    return(
        <div className="main">
            <div className="small">
                <img src={car1} alt="food" />
                <h2>Small Board.</h2>
                <p>Small meat and Cheese board 35$.</p>
                <p>good for a treat or gift</p>
                <Button variant="contained">
                <a href="mailto:tgodkev@gmail.com">order</a>
                </Button>
                </div>
                <div className="med">
                <img src={car2} alt="" />
                    <h2>Medium Board</h2>
                <p>This board is great for any family ocasion. 65$</p>
                <Button variant="contained">
                <a href="mailto:tgodkev@gmail.com">order</a>
                </Button>
                </div>
        </div>
    )
}


export default Main;