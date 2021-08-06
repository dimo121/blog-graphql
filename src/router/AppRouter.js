import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogPage from '../components/BlogPage'
import CreateEntry from '../components/CreateEntry'
import CreateBlog from '../components/CreateBlog'
import MyBlogsPage from '../components/MyBlogsPage'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import { ApolloProvider } from '@apollo/react-hooks'
import client from '../apollo/client.js'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="main-container">
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/createblog" component={CreateBlog} />
            <Route path="/createentry" component={CreateEntry} />
            <Route path="/myblogs" component={MyBlogsPage} />
            <Route path="/blog/:id" component={BlogPage} />
          </Switch>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default AppRouter
