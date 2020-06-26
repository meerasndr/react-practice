import React from 'react';

const ClockDisplay = (props) => {
    return(
        <div>
         <h2>{props.city} </h2>
         <hr style={{borderColor:"red"}} />
         <h3>{props.time} </h3>
                
        </div>
    )
}

export default ClockDisplay;