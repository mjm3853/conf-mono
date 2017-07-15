import { gql } from 'react-apollo';

const createConferenceMutation = gql`
  mutation createConference(
    $name: String!,
    $description: String!,
    $start: DateTime!,
    $end: DateTime!,
    $locationName: String!,
    $locationCity: String!,
    $locationState: String!,
    $tags: [ConferencetagsTag!]
  ) { createConference (
    name: $name,
    description: $description
    start: $start,
    end: $end,
    location: {
      name: $locationName,
      city: $locationCity,
      state: $locationState
    },
    tags: $tags
  ) {
    createdAt
  }
}
`;

export default createConferenceMutation;