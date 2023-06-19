const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    gender: String
    email: String
    password: String
}

type Job {
    _id: ID
    companyName: String
    location: String
    jobTitle: String
    description: String
    position: String
    salary: String
   
}
type Auth {
    token: ID
    user: User
}
type Query {
    viewUsers: [User]
    viewJobs :[Job]
}

type Mutation {
    login(email: String!, password: String!): User
    addUser(firstName: String, lastName: String, gender: String, email: String, password: String): Auth
    addJob(companyName: String, location: String, jobTitle: String,  description: String, position: String, salary: String,
     ): Job
    updateJob(_id: ID, companyName: String!, location: String!, jobTitle: String!, description: String!, position: String, salary: String): Job
    removeJob(_id: ID): Job
    removeUser(_id: ID): User
    updateUser(_id: ID, firstName: String!, lastName: String!, gender: String, email: String!, password: String!): User

}
`

module.exports = typeDefs;