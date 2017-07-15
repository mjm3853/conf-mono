import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';

const apolloConnect = new ApolloClient({
  networkInterface: createNetworkInterface(
    { uri: 'https://api.graph.cool/simple/v1/conf-ql' }
  )
});

export default apolloConnect;