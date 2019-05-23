import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import "./Header.css"
import{login, logout} from "../../redux/authReducer"
import Axios from "axios";
import {connect} from "react-redux" 

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }
  // componentDidMount() {
  //   Axios.get("/api/user").then(res => {
  //     console.log("res.data",res)
  //     this.props.login(res.data);
  //   });
  //   // this.login();
  // }

  logout = () => {
    Axios.post("/api/logout").then(() => {
      this.props.logout(null);
    });
  };
  
  
  login(){
    const loginPayload = {
      username: this.state.username,
      password: this.state.password
    };
    Axios.post("/api/login", loginPayload).then(res => {
      console.log("logged in", res.data);
      this.props.login(res.data);
    })
    // .catch(err => alert(err));
  }
  
  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { username, password } = this.state;
    const { authReducer } = this.props;
    const { user } = authReducer
    console.log(this.props, "this.props")
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
          placeholder="username"
          name="username"
          value={username}
          onChange={e =>
          this.changeHandler(e.target.name, e.target.value)
        }
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={e =>
          this.changeHandler(e.target.name, e.target.value)
      }
      />
      <button id="login" onClick={() => this.login()}>Login</button>
        </li>
          ) : (
            <button onClick={this.logout}>Logout</button>
          )}
          {JSON.stringify(this.state.user)}
        </ul>
      </nav>
    </div>
    
    )}
}

const mapStateToProps = reduxState => {
  console.log(reduxState)
  return {
    authReducer: reduxState.authReducer
  };
};
const mapDispatchToProps = {
  login,
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);