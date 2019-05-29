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
      <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <h1>Register</h1>

        <div className="regisForm">
          <ul>
            <li className="register">
              <input
                placeholder="email"
                name="email"
                value={email}
                onChange={e =>
                  this.changeHandler(e.target.name, e.target.value)
                }
              />
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
                name="password"
                value={password}
                onChange={e =>
                  this.changeHandler(e.target.name, e.target.value)
                }
              />
              <input
                placeholder="first name"
                name="f_name"
                value={f_name}
                onChange={e =>
                  this.changeHandler(e.target.name, e.target.value)
                }
              />
              <input
                placeholder="last name"
                name="l_name"
                value={l_name}
                onChange={e =>
                  this.changeHandler(e.target.name, e.target.value)
                }
              />
              <input
                placeholder="social security #"
                name="social"
                value={social}
                onChange={e =>
                  this.changeHandler(e.target.name, e.target.value)
                }
              />
              <input
                placeholder="mother's maiden name"
                name="mom_m"
                value={mom_m}
                onChange={e =>
                  this.changeHandler(e.target.name, e.target.value)
                }
              />
              <input
                placeholder="age"
                name="age"
                value={age}
                onChange={e =>
                  this.changeHandler(e.target.name, e.target.value)
                }
              />
              <input
                placeholder="gender"
                name="gender"
                value={gender}
                onChange={e =>
                  this.changeHandler(e.target.name, e.target.value)
                }
              />
              <input
                placeholder="profile_pic"
                name="profile_pic"
                value={profile_pic}
                onChange={e =>
                  this.changeHandler(e.target.name, e.target.value)
                }
              />
              <button id="regButton" onClick={this.register}>
                Register
              </button>
            </li>
          </ul>
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
