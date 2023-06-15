import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [loginUser] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginUser({
        variables: { ...formState },
      });
      // Handle the login response
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <LoginForm
          formState={formState}
          handleInputChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
