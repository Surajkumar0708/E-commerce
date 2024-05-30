import React from "react";
import "./loginStyle.css";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const currentLocation = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem("usn", username);
      window.location.reload();
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <div className="login-header">
          <h2>Login</h2>
        </div>
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
