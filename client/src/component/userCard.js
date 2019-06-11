import React from "react";


function UserCard() {
return (
  <div className="card bg-dark container text-light col-md-3 list-group-16">
   
  <li className="list-group-item list-group-item-dark text-center">
    <strong>Client Card</strong>
  </li>
  <li className="list-group-item list-group-item-light">Name: </li>
  <li className="list-group-item list-group-item-light">Age: </li>
  <li className="list-group-item list-group-item-light">Email: </li>
  

      {/* <ul>
        <li>
          <strong>Client: </strong>
        </li>
        <li>
          <strong>Age: </strong>
        </li>
        <li>
          <strong>Email: </strong>
        </li>
        <li>
          <strong>Offer: </strong>
        </li>
      </ul> */}
   
  </div>

)

}

export default UserCard;