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
    jobLister: User
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
    addUser(firstName: String, lastName: String, gender: String, email: String, password: String): User
    addJob(companyName: String, location: String, jobTitle: String,  description: String, position: String, salary: String, jobLister: ID
     ): Job

}
`

module.exports = typeDefs;