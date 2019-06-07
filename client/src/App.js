import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import login from "./pages/login";
import home from "./pages/home";
import offer from "./pages/offer"
import Navbar from './component/navbar';


function App() {
  return (
    <Router>
      <div>
        {/* put navbar on each page. everything in the switch gets a navbar */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/offer" component={offer} />
          <Route exact path="/login" component={login} />
          <Route render={() => <h2> 404 Page!!</h2>} />
        </Switch>
      </div>
    </Router>

  )


}



export default App;
