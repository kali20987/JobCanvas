import { gql } from '@apollo/client';

export const QUERY_VIEWJOBS = gql`
  query viewJobs {
    viewJobs {
      _id
      companyName
      location
      jobTitle
      description
      position
      salary
    }
  }
`;