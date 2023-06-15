import React, { useState } from "react";

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    console.log('Signup submitted:', { firstName, lastName, email, password });
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;



// import { useMutation } from "@apollo/client";
// import { ADD_USER } from "../utils/mutations";

// const SignUp = () => {
//   const [formState, setFormState] = useState({
//     firstName: "",
//     lastName: "",
//     gender: "",
//     email: "",
//     password: "",
//   });
//   const [addUser, { error, data }] = useMutation(ADD_USER);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };
// };

// const handleFormSubmit = async (event) => {
//   event.preventDefault();
//   try {
//     const { data } = await addUser({
//       variables: { ...formState },
//     });
//   } catch (e) {
//     console.error(e);
//   }
// };

// return (
//   <main className="row g-3 align-items-center">
//     <h1>SignUp Page</h1>
//     <form onSubmit={handleFormSubmit}>
//     <div className="col-auto">
//         <label >
//         </label>
//       </div>
//       <div className="col-auto">
//         <label for="inputPassword8" className="col-form-label">
//           Password:
//         </label>
//       </div>
//       <div className="col-auto">
//         <input
//           type={"password"}
//           id="inputPassword8"
//           className="form-control"
//           aria-aria-labelledby="passwordHelpInline"
//         >
//           {" "}
//         </input>
//       </div>
//       <div className="col-auto">
//         <span id="passwordHelpInline" className="form-text">
//           {" "}
//           Must be at least 8 characters
//         </span>
//       </div>
//     </form>
//   </main>
// );

// export default SignUp;
