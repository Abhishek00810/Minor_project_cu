import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
function Registration()
{
    const onSubmit = (e) => {
        e.preventDefault();
        const value = e.target[0].value;
        axios
          .post("http://localhost:3001/registration", { username: value, password: e.target[1].value})
          .then((r) => props.onAuth({ ...r.data, secret: value }))
          .catch((e) => console.log("Auth Error", e));

        alert("User Registered")
      };
    return (
        <div className="background">
          <form  className="form-card"  onSubmit={onSubmit}>
            <div className="form-title">Here we go 😃</div>
    
            <div className="form-subtitle">Register Yourself!!</div>
            
            <div className="auth">
              <div className="auth-label">Username</div>
              <input className="auth-input" name="username" />
              <div className="auth-label-mail">Password</div>
              <input className="auth-input" type="password" autoComplete="on" name="password"/>
              <button className="auth-button" type="submit">
                Register
              </button>
            </div>
            <Link className="form-subtitle link" target="_blank" to="/">Login Now!</Link>

          </form>
        </div>
      );
}
export default Registration