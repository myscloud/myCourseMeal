// [APP MAIN PAGE]
// myCourseMeal
// By c3mx,tonmaw,kamkam
// ES2015
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';

// Create Redux Store
// Store is the place where REDUCERS(Action) meets STATE(Data)
var store = createStore(() => {})

//Content From Every Modules
import WelcomePage      from './WelcomePage' // Landing Pages
import MainApp          from './MainApp' // Headers, Menus
import NavLink          from './NavLink' // To Create Router Links
import CreateEvent      from './CreateEvent' // Create New Event
import AllEventList     from './AllEventList' // Display Every Events
import EventDetail      from './EventDetail' // Detail of each event
import MyEventList      from './MyEventList' // List Of This User Event
import EventDiscussion  from './EventDiscussion' // Chat in the event <- FB API ???

//Rendering pages
render((
  <Provider store = {store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainApp} onEnter ={checkLogin}>
        <IndexRoute component={WelcomePage}/>
        <Route path="/welcome"          component={WelcomePage}/>
        <Route path="/create"           component={CreateEvent}/>
        <Route path="/allEvent"         component={AllEventList}/>
        <Route path="/detail/:eventId"  component={EventDetail}/>
        <Route path="/myEvent"          component={MyEventList}/>
        <Route path="/discuss/:eventId" component={EventDiscussion}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app-container'))

function checkLogin() {
  console.log("CHECK LOGIN");
}
