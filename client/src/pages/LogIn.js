import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN_USER } from "../utils/mutations";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const navigate = useNavigate();

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
      // Redirect to the home page
      navigate('/');
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
   
      <form onSubmit={handleFormSubmit}>
        <LoginForm
          formState={formState}
          handleInputChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Login;

