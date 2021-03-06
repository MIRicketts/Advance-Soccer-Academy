import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import BackgroundImg from '../component/soccer-background.jpg';
import { createUser } from "../utils/api";

class Home extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    password: "",
    activeTab: "login",
    isLoggedIn: false,
    createUserResponse: {}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  handleLoginSubmit = event => {
    event.preventDefault();
    createUser({
      email: this.state.email,
      password: this.state.password
    })
      .then(({ data: createUserResponse }) => {
        console.log(createUserResponse);
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(err => console.log(err));
  };

  handleSignUpSubmit = event => {
    event.preventDefault();
    createUser({
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      password: this.state.password
    })
      .then(({ data: createUserResponse }) => {
        console.log(createUserResponse);
        this.setState({
          activeTab: "login",
          createUserResponse: createUserResponse
        })
      })
      .catch(err => console.log(err));
  };

  // retrieveFormSubmit = () => {
  //   getAllUsers ({
  //     name: this.state.name,
  //       email: this.state.email,
  //       age: this.state.age,
  //       passWord: this.state.password
  //   })

  // }

  handleTabSwitch = (tabName) => {
    this.setState({
      activeTab: tabName
    });
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to={{
        pathname: "/offer",
        state: {
          userInfo: this.state.createUserResponse
        }
      }} />
    }

    return (

      <React.Fragment>
        <div className="jumbotron jumbotron-fluid text-center text-light"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            backgroundPosition: "center",
            height: "100vh",
        

          }} >
          <h1 className="display-2"><strong>Advance Soccer Scheduler</strong></h1>
          <h3>Organize yourself</h3>


          <div className="card-body col-md-2 text-center bg-dark mx-auto"
          style = {{
            marginTop: "120px"
          }}
           >
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className={`nav-link ${this.state.activeTab === "login" ? "active" : ""}`} href="#pills-profile" data-toggle="pill" role="tab" aria-controls="pills-home" onClick={() => this.handleTabSwitch("login")}>Login</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${this.state.activeTab === "signup" ? "active" : ""}`} data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" onClick={() => this.handleTabSwitch("signup")}>Sign Up</a>
              </li>
            </ul>
          


          <div className="tab-content" id="pills-tabContent">
            <div className={`tab-pane fade show ${this.state.activeTab === "login" ? "active" : ""}`} role="tabpanel">
              <form onSubmit={this.handleLoginSubmit}>
                <label>
                  Email:
  <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                </label>
                <label>
                  Password:
  <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Login" />
              </form>
            </div>


            <div className={`tab-pane fade show ${this.state.activeTab === "signup" ? "active" : ""}`} role="tabpanel">
              <form onSubmit={this.handleSignUpSubmit}>
                <label>
                  Name:
  <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                </label>
                <label>
                  Age:
  <input type="text" name="age" value={this.state.age} onChange={this.handleInputChange} />
                </label>

                <label>
                  Email:
  <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                </label>
                <label>
                  Password:
  <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Sign Up" />
              </form>
            </div>
          </div>

          </div>

        </div>
        <div className="card card-container-fluid"></div>

      </React.Fragment>
    )

  }
}

export default Home;
