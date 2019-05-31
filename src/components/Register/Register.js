import React, { Component } from "react";
import axios from "axios";
import { register } from "../../redux/authReducer";
import "./register.css";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      f_name: "",
      l_name: "",
      social: "",
      mom_m: "",
      age: null,
      gender: "",
      profile_pic: ""
    };
    this.register = this.register.bind(this);
  }

  // componentDidMount(){
  //     axios.get("/api/users").then(res => {
  //         console.log(res)
  //         this.props.register(res.data);
  //     });
  // }

  register() {
    const loginPayload = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      social: this.state.social,
      mom_m: this.state.mom_m,
      age: this.state.age,
      gender: this.state.gender,
      profile_pic: this.state.profile_pic
    };
    axios
      .post("/api/register", loginPayload)
      .then(res => {
        console.log(res.data);
        this.props.register(res.data);
        this.props.history.push("/myprofile");
      })
      .catch(err => alert("User exists. Please log in"));
  }
  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      email,
      username,
      password,
      f_name,
      l_name,
      social,
      mom_m,
      age,
      gender,
      profile_pic
    } = this.state;

    return (
      <div className="reg-cont">
        <div className="regisForm">
          <h1 id="reg">Register</h1>
          <div className="register-b">
            <input
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <input
              placeholder="Username"
              name="username"
              value={username}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <input
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <input
              placeholder="First"
              name="f_name"
              value={f_name}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <input
              placeholder="Last"
              name="l_name"
              value={l_name}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <input
              placeholder="SS#"
              name="social"
              value={social}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <input
              placeholder="MMN"
              name="mom_m"
              value={mom_m}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <input
              placeholder="Age"
              name="age"
              value={age}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <input
              placeholder="Gender"
              name="gender"
              value={gender}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <input
              placeholder="Profile Pic"
              name="profile_pic"
              value={profile_pic}
              onChange={e => this.changeHandler(e.target.name, e.target.value)}
            />
            <button id="regButton" onClick={this.register}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};

const mapDispatchToProps = {
  register: register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
