import { gql } from '@apollo/client';

export const ADD_JOB = gql`
mutation mutateJobs($companyName: String!, $location: String!, $jobTitle: String!, $description: String!, $position: String!, $salary: String!) {
    addJob(companyName: $companyName, location: $location, jobTitle: $jobTitle, description: $description, position: $position, salary: $salary) {
        companyName
        location
        jobTitle
        description
        position
        salary
        }
     }
`;