import React, {Component} from "react";


class UserCard extends Component{



render () {
  
return (
  <div className="card bg-dark container text-light col-md-3 list-group-16">
   
  <li className="list-group-item list-group-item-dark text-center">
    <strong>Client Card</strong>
  </li>
  <li className="list-group-item list-group-item-light">Name: {this.props.userInfo.name}</li>
  <li className="list-group-item list-group-item-light">Age: {this.props.userInfo.age}</li>
  <li className="list-group-item list-group-item-light">Email: {this.props.userInfo.email}</li>
  

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
};

export default UserCard;