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
mutation addUser($firstName: String, $lastName: String, $gender: String, $email: String, $password: String) {
  addUser(firstName: $firstName, lastName: $lastName, gender: $gender, email: $email, password: $password) {
    token
    user 
      
  }
}
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      password
    }
  }
`;
export const UPDATE_JOB = gql`
mutation updateJob($_id: ID
  $companyName: String!
  $location: String!
  $jobTitle: String!
  $description: String!
  $position: String
  $salary: String
 ){
  _id
  companyName
  location
  jobTitle
  description
  position
  salary
 }
 `;
 export const UPDATE_USER = gql`
 mutation updateUser($_id: ID
 $firstName: String!
  $lastName: String!
  $gender: String
  $email: String!
  $password: String!){
    _id
    firstName
    lastName
    gender
    email
    password
  }
 `;
 export const REMOVE_USER = gql`
 mutation removeUser($_id:ID){
  _id
 }
 `;
 export const REMOVE_JOB = gql`
 mutation removeJob($_id:ID){
  _id
 }
 `;
