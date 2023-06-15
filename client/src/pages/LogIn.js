import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations";

const LogIn = () => {
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

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Your login form JSX */}
    </form>
  );
};

export default LogIn;
