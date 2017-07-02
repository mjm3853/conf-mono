import {
    commitMutation,
    graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
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
            updater: (proxyStore) => {
                const deleteConferenceField = proxyStore.getRootField('deleteConference')
                const deletedId = deleteConferenceField.getValue('deletedId')
                const viewerProxy = proxyStore.get(viewerId)
                const connection = ConnectionHandler.getConnection(viewerProxy, 'ListConferences_allConferences')
                if (connection) {
                    ConnectionHandler.deleteNode(connection, deletedId)
                }
            },
            optimisticUpdater: (proxyStore) => {
                const viewerProxy = proxyStore.get(viewerId)
                const connection = ConnectionHandler.getConnection(viewerProxy, 'ListConferences_allConferences')
                if (connection) {
                    ConnectionHandler.deleteNode(connection, conferenceId)
                }

            }
        }
    )
}