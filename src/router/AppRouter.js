import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogPage from "../components/BlogPage";
import CreateEntry from "../components/CreateEntry";
import CreateBlog from "../components/CreateBlog";
import MyBlogsPage from "../components/MyBlogsPage";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sponsors from "../components/Sponsors";
import ScrollToTop from "../components/ScrollToTop";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "../apollo/client.js";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="main-container">
          <ScrollToTop />
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/createblog" component={CreateBlog} />
            <Route path="/createentry" component={CreateEntry} />
            <Route path="/myblogs" component={MyBlogsPage} />
            <Route path="/blog/:id" component={BlogPage} />
            <Route path="/sponsors" component={Sponsors} />
          </Switch>
          <Footer />
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
