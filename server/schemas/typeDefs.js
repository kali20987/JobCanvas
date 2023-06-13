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

type Query {
    viewUsers: [Users]
}

type Mutation {
    addUser(firstName: String, lastName: String, gender: String, email: String, password: String)
}
`;






module.exports = typeDefs;