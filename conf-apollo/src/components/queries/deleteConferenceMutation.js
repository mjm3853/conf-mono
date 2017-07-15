import { gql } from 'react-apollo';

const deleteConferenceMutation = gql`
  mutation deleteConference(
    $id: ID!
  ) { deleteConference (
    id: $id
  ) {
    id
  }
}
`;

export default deleteConferenceMutation;