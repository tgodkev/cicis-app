import React from "react";
import car1 from './carcoochie1.jpg'
import car2 from './bgcar2.jpg'

function Main()
{
    return(
        <div className="main">
            <div className="small">
                <img src={car1} alt="food" />
                <h2>Small Board.</h2>
                <p>Small meat and Cheese board 35$. Good for small gatherings or as a treat.</p>
                </div>
                <div className="med">
                <img src={car2} alt="" />
                    <h2>Medium Board</h2>
                <p>This board is great for any family ocasion. 65$</p>
                </div>
        </div>
    )
}


export default Main;