import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMuation } from '@apollo/client';
import { ADD_USER } from "../utils/mutations";

const SignUp = () => {
    const[formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        password: '',
    });
    const [addUser, {error, data}] = useMuation(ADD_USER);
    const handleChange =(event) => {
        const { name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        })};
};

const handleFormSubmit = async(event) => {
    event.preventDefault();
    try {
        const {data} = await addUser({
            variables: {...formState},
        });
        Auth.login(data.addUser.token); 
    } catch (e) {
        console.error(e);
    }
};

return (
    <main className='row g-3 align-items-center'>
        <div className='col-auto'>
            <label for='inputPassword8'className='col-form-label'>Password:</label>
        </div>
        <div className='col-auto'>
            <input type={'password'} id='inputPassword8' className='form-control' aria-aria-labelledby='passwordHelpInline'> </input>
        </div>
        <div className='col-auto'>
            <span id='passwordHelpInline' className='form-text'> Must be at least 8 characters</span>
        </div>    
    </main>
  );

export default SignUp;
