import { gql } from 'react-apollo';

const deleteConferenceMutation = gql`
  mutation deleteConference(
    $id: String!
  ) { deleteConference (
    id: $id
  )
}
`;

export default deleteConferenceMutation;