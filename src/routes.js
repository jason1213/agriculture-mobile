import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import Home from './containers/Home'

/*
  <Route path="/:login/:name"
         component={RepoPage} />
  <Route path="/:login"
         component={UserPage} />
*/
export default <Route path="/" component={App}>
  <IndexRoute component={Home} />
</Route>