import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink, from } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

const link = new HttpLink({ uri: 'http://localhost:4000/' })
const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('jwtoken')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

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

const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
})

export default client
