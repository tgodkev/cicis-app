import React from "react";
import car from './car3.jpg'

function Hero(){
return(
    <div className="hero">
        <h1>Hello welcome to Honey Charcuterie Co.</h1>
        <img src={car} alt="food" />
            <p>Hand crafted charcuterie boards made with the finest meats, cheeses and fruits. All sourced from local buissness.</p>
    </div>
)
}

export default Hero;