import React from 'react';
import NavLink from './NavLink'

// Main Application Class

class MainApp extends React.Component {

  render() {
    // Check If User Logged in with Facebook or not
    const auth = true; //this.props.auth;

    if (auth) {
      return <div>
        <h1>myCourseMeal !!
        </h1>
        <ul role="nav">
          <li>
            <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
          </li>
          <li>
            <NavLink to="/newsfeed">newsfeed</NavLink>
          </li>
          <li>
            <NavLink to="/welcome">welcomepage</NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>;
    } else {
      return <center>
        <h1>PLEASE LOGIN FIRST
        </h1>
      </center>
    }
  }
}

export default MainApp;
