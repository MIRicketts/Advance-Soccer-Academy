import React from "react";
import BackgroundImg from '../component/soccer-background.jpg';


function Offer(){
return(
<React.Fragment>
<div className="jumbotron jumbotron-fluid text-center text-light"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            backgroundColor: "gray"

          }} >
          <h1 className="display-2">Advance Soccer Scheduler</h1>
          <h3>Organize yourself</h3>
        </div>
</React.Fragment>

)

}

export default Offer;