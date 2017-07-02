import {
    commitMutation,
    graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from './Environment'

const mutation = graphql`
    mutation CreateConferenceMutation($input: CreateConferenceInput!) {
        createConference(input: $input) {
            conference {
                id
                name
                description
                url
                start
                end
            }
        }
    }
`
let tempID = 0

export default (name, description, url, start, end, viewerId, callback) => {
    const variables = {
        input: {
            name,
            description,
            url,
            start,
            end,
            clientMutationId: ""
        }
    }
    commitMutation(
        environment,
        {
            mutation,
            variables,
            optimisticUpdater: (proxyStore) => {
                const id = 'client:newConference:' + tempID++
                const newConference = proxyStore.create(id, 'Conference')
                newConference.setValue(id, 'id')
                newConference.setValue(name, 'name')
                newConference.setValue(description, 'description')
                newConference.setValue(url, 'url')
                newConference.setValue(start, 'start')
                newConference.setValue(end, 'end')

                const viewerProxy = proxyStore.get(viewerId)
                const connection = ConnectionHandler.getConnection(viewerProxy, 'ListConferences_allConferences')
                if (connection) {
                    ConnectionHandler.insertEdgeAfter(connection, newConference)
                }
            },
            updater: (proxyStore) => {
                const createConferenceField = proxyStore.getRootField('createConference')
                const newConference = createConferenceField.getLinkedRecord('conference')

                const viewerProxy = proxyStore.get(viewerId)
                const connection = ConnectionHandler.getConnection(viewerProxy, 'ListConferences_allConferences')
                if (connection) {
                    ConnectionHandler.insertEdgeAfter(connection, newConference)
                }

            },
            onCompleted: () => {
                callback()
            },
            onError: err => console.error(err)
        }
    )
}