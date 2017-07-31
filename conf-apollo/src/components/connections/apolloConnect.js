import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';

const apolloConnect = new ApolloClient({
  networkInterface: createNetworkInterface(
    { uri: 'https://api.graph.cool/simple/v1/conf-ql' }
  ).use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      // get the authentication token from local storage if it exists
      if (localStorage.getItem('auth0IdToken')) {
        req.options.headers.authorization = `Bearer ${localStorage.getItem('auth0IdToken')}`
      }
      next()
    },
  }])
});

export default apolloConnect;