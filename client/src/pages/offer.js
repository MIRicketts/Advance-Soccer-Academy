import React, {useEffect, useState} from "react";
import BackgroundImg from '../component/soccer-background.jpg';
import UserCard from "../component/userCard"
import OfferCard from "../component/offerCard"


function Offer(props){
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    email: ""
  });

  useEffect(() => {
    const userInfo = props.location.state ? props.location.state.userInfo : {name: "Marsden", age: 99, email: "marsden@gmail.com"}
    setUserInfo(userInfo);
  })

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
<div className="row">
<UserCard userInfo={userInfo}/>

<OfferCard />
</div>
</React.Fragment>

)

}

export default Offer;