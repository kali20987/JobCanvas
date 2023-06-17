import React from 'react';
import '../components/LoginForm.css';

export default function LoginForm({ formState, handleInputChange }) {
  return (
    <div className="login-page">
      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label form-label-email">
              Email address
            </label>
            <input
              type="email"
              className="form-control rubik-font"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label form-label-password">
              Password
            </label>
            <input
              type="password"
              className="form-control rubik-font"
              id="exampleInputPassword1"
              name="password"
              value={formState.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary rubik-font">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
