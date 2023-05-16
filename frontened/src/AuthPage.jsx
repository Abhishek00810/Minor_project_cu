import axios from "axios";
import { Link } from 'react-router-dom';
import Failchatpage from "./failchatpage";
import Create from "./Create";
function AuthPage(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[1].value)
    const { value } = e.target[0]
    axios
      .post("http://localhost:3001/authenticate", { username: value, password: e.target[1].value})
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Login to username and password</div>
        {props.hasEnter ? <Failchatpage /> : null}
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <div className="auth-label-mail">Password</div>
          <input className="auth-input" type="password" autoComplete="on" name="password"/>
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
        
        <Link className="form-subtitle link" target="_blank" to="/Registration">Didn't have account? Register Here</Link>
      </form>
    </div>
  );
};

export default AuthPage;