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

type Query {
    viewUsers: [User]
    viewJobs :[Job]
}

type Mutation {
    addUser(firstName: String, lastName: String, gender: String, email: String, password: String): User
<<<<<<< HEAD
=======
}
>>>>>>> 371bca1 (added user mutation)

    addJob(companyName: String, location: String, jobTitle: String,  description: String, position: String, salary: String, jobLister: ID
     ): Job
}

module.exports = typeDefs;