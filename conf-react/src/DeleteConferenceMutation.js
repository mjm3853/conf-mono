import {
  commitMutation,
  graphql,
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime'
import environment from './Environment'

const mutation = graphql`
    mutation DeleteConferenceMutation($input: DeleteConferenceInput!) {
        deleteConference(input: $input) {
            deletedId
        }
    }
`

export default (conferenceId, viewerId) => {
    const variables = {
        input: {
            id: conferenceId,
            clientMutationId: ""
        }
    }
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onError: err => console.error(err),
            optimisticUpdater: (proxyStore) => {

            },
            updater: (proxyStore) => {

            }
        }
    )
}