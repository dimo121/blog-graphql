import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import { config } from '../config/config';
import jwt from 'jsonwebtoken';

const link = new HttpLink({ uri: 'http://localhost:4000/' });
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('jwtoken');
  let expired = false;

  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) expired = true;
    });
  }

  if (expired === true || !token) return { headers };

  return {
    headers: {
      ...headers,
      authorization: expired ? '' : `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
});

export default client;

// ApolloLink.from([
//   onError(({ graphQLErrors, networkError }) => {
//     if (graphQLErrors) {
//       graphQLErrors.map(({ message, locations, path }) =>
//         console.log(`[GraphQL error]: Message: ${message}, Location:
//         ${locations}, Path: ${path}`),
//       );
//       if (networkError) {
//         console.log(`[Network error]: ${networkError}`);
//       }
//     }
//   })])

// const defaultOptions = {
//     watchQuery: {
//         fetchPolicy: 'no-cache',
//         errorPolicy: 'ignore'
//     },
//     query: {
//         fetchPolicy: 'no-cache',
//         errorPolicy: 'all'
//     }
// }
