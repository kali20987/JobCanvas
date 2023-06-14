import { gql } from "@apollo/client";

export const ADD_JOB = gql`
  mutation mutateJobs(
    $companyName: String!
    $location: String!
    $jobTitle: String!
    $description: String!
    $position: String!
    $salary: String!
  ) {
    addJob(
      companyName: $companyName
      location: $location
      jobTitle: $jobTitle
      description: $description
      position: $position
      salary: $salary
    ) {
      companyName
      location
      jobTitle
      description
      position
      salary
    }
  }
`;

//MADISON
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String
    $lastName: String
    $gender: String
    $email: String
    $password: String
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      gender: $gender
      email: $email
      password: $password
    ) {
      _id
      firstName
      lastName
      gender
      email
    }
  }
`;
