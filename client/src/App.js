import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import home from "./pages/home";
import offer from "./pages/offer"
import Navbar from './component/navbar';
import Login from './Login';
// import userCard from "./component/userCard"



function App() {
  
    return (
      <Router>
         {/* put navbar on each page. everything in the switch gets a navbar */}
         <Navbar />
        <Switch>
          <Route path='/' exact={true} component={home} />
          <Route path="/home" component={home} />
          <Route path='/Login' component={Login} />
          <Route path="/offer" component={offer} />
          <Router render={() => <h2> 404 Page!!</h2>} />
        </Switch>
      </Router>
    );
 
  }




export default App;
