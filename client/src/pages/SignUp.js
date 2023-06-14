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


export default SignUp;
