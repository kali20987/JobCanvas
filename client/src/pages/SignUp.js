import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import "../styles/SignUp.css";



const SignUp = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(error);
    console.log(data);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = addUser({
        variables: { ...formState },
      });
      console.log(data);
      // Clear the form inputs
      setFormState({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        password: "",
      });
    } catch (e) {
      console.error(e);
      
    }
  };

  return (
    <main className="row g-3 align-items-center">
      <h1>SignUp Page</h1>
      <form onSubmit={handleFormSubmit}>
        {/* First Name */}
        <div className="col-auto">
          <label for="exampleFormControlInput1" className="form-label">
            First Name:
          </label>
          <input
            type={"text"}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="First Name"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
          ></input>
        </div>
        {/* Last Name */}
        <div className="col-auto">
          <label for="exampleFormControlInput1" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            placeholder="Last name"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
          ></input>
        </div>
        {/* Gender */}
        <div className="col-auto">
          <label for="exampleFormControlInput1" className="form-label">
            Gender:
          </label>
          <select
            type="list"
            className="form-select"
            id="inputGender"
            name="gender"
            value={formState.gender}
            onChange={handleChange}
          >
            <option selected>Choose a gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Trans</option>
            <option value="4">Non-Binary</option>
            <option value="5">Other</option>
          </select>
        </div>
        {/* Email Input */}
        <div className="col-auto">
          <label for="exampleFormControlInput1" className="form-label">
            Email address:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            value={formState.email}
            onChange={handleChange}
          ></input>
        </div>
        {/* Password Input */}
        <div className="col-auto">
          <label for="inputPassword8" className="col-form-label">
            Password:
          </label>
        </div>
        <div className="col-auto">
          <input
            type="password"
            id="inputPassword8"
            className="form-control"
            name="password"
            value={formState.password}
            onChange={handleChange}
            // eslint-disable-next-line
            aria-aria-labelledby="passwordHelpInline"
          ></input>
        </div>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            {" "}
            Must be at least 8 characters
          </span>
        </div>
        <button
          className="btn btn-block btn-primary"
          style={{ cursor: "pointer" }}
          type="submit"
          onSubmit={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </main>
  );
};
export default SignUp;
