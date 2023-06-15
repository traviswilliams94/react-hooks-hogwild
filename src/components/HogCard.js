import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css'

function HogCard({ hogImage, hogName, weight, greased, specialty, highestMedal} ) {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(!isClicked);
    }

    return (
        <div className="ui eight wide column pigTile" onClick={handleClick}>
            <h4>{hogName}</h4>
            <img width={250} src={hogImage}/>

            {isClicked ? (
                <div>
                    <p>Weight: {weight}</p>
                    <p>Specialties: {specialty}</p>
                    <p>Highest Medal Achieved: {highestMedal}</p>
                    <p>{greased ? "Greased" : ""}</p>

                </div>
            ) : null}
          
        </div>


    )
};







export default HogCard;