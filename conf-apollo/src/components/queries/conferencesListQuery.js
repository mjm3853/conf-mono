import { gql } from 'react-apollo';

const conferencesListQuery = gql`
  query ConferencesListQuery {
    allConferences {
      id
      name
      description
      start
      end
      location {
        id
        name
        city
        state
        country
        postalCode
        address
      }
      tags {
        id
        name
      }
    }
  }
`;

export default conferencesListQuery;