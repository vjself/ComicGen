import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import "./Header.css"
// import {connect} from "react-redux" 

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    // this.login = this.login.bind(this)
  }


  render() {
    const { user } = this.props;
    return (
      <div>
      <logo>logo</logo>
      <div className="home">
      <NavLink to="/" >
      Home
      </NavLink></div>
      <div className="register">
      <NavLink to="/register" >
          Register
        </NavLink> 
        </div>
      <div className="feed">
        <NavLink to ="/feed"> Community Feed </NavLink> </div>
      <nav>
        <ul>
          {!user ? ( 
          <li>
          <input
        //   placeholder="username"
        //   name="username"
        //   value={username}
        //   onChange={e =>
        //   this.changeHandler(e.target.name)
        // }
        />
        <input
      //     placeholder="password"
      //     type="password"
      //     name="password"
      //     value={password}
      //     onChange={e =>
      //     this.changeHandler(e.target.name, e.target.value)
      // }
      />
      <button id="login" onClick={this.login}>Login</button>
        </li>
          ) : (
            <button onClick={this.logout}>Logout</button>
          )}
        </ul>
      </nav>
    </div>
    
    )}
}

