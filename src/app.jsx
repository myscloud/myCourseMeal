// [APP MAIN PAGE]
// myCourseMeal
// By c3mx,tonmaw,kamkam
// ES2015

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

//Content From Every Modules
import WelcomePage  from './welcome-page'
import NewsFeed     from './news-feed'
import MainApp      from './mainApp' // Headers, Menus
import NavLink      from './NavLink'
//Rendering pages

render((
  <Router history={browserHistory}>
    <Route path="/" component={MainApp}>
      <IndexRoute component={WelcomePage}/>
      <Route path="/welcome" component={NewsFeed}>
      </Route>
      <Route path="/newsfeed" component={NewsFeed}/>
    </Route>
  </Router>
  // <Router history={browserHistory}>
  //   <Route path="/" component={WelcomePage}>
  //       <IndexRoute component={NavBar}/>
  //       <Route path="/welcome" component={WelcomePage} />
  //       <Route path="/newsfeed" component={NewsFeed} />
  //   </Route>
  //
  // </Router>
), document.getElementById('app-container'))
