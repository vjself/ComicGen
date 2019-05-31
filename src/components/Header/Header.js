import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Header.css";
import { login, logout } from "../../redux/authReducer";
import Axios from "axios";
import logo from "../Home/ToolBox/Chars/logo.png";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout = () => {
    Axios.post("/api/logout").then(() => {
      this.props.logout(null);
    });
  };

  login() {
    const loginPayload = {
      username: this.state.username,
      password: this.state.password
    };
    Axios.post("/api/login", loginPayload)
      .then(res => {
        this.props.login(res.data);
      })
      .catch(err => alert("Please try logging in again.", err));
    this.props.history.push("/home");
  }

  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { username, password } = this.state;
    const { authReducer } = this.props;
    const { user } = authReducer;
    console.log(user);
    return (
      <div className="header">
        <NavLink to="/">
          <img className="logo" src={logo} alt="" />
        </NavLink>

        <div className="home">
          <NavLink to="/home">Create</NavLink>
        </div>

        <div className="register">
          <NavLink to="/register">Register</NavLink>
        </div>

        <div className="feed">
          <NavLink to="/feed"> Community Feed </NavLink>
        </div>

        <div className="myprofile">
          <NavLink to="/myprofile"> My Profile </NavLink>{" "}
        </div>

        {!user ? (
          <div className="login">
            <input
              placeholder="Username..."
              name="username"
              value={username}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />

            <input
              placeholder="Password..."
              type="password"
              name="password"
              value={password}

              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <button id="logobutton" onClick={() => this.login()}>
              Login
            </button>
          </div>
        ) : (
          <button id="logout" onClick={this.logout}>
            Logout
          </button>
        )}
      </div>
    );
  }

}

const mapStateToProps = reduxState => {
  return {
    authReducer: reduxState.authReducer
  };
};
const mapDispatchToProps = {
  login,
  logout
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
