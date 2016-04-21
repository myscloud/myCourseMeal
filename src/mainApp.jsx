import React from 'react';
import NavLink from './NavLink'
class MainApp extends React.Component {
    render() {
        return <div>
          <h1>myCourseMeal !! </h1>
          <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/newsfeed">newsfeed</NavLink></li>
          <li><NavLink to="/welcome">welcomepage</NavLink></li>
          </ul>
          {this.props.children}
        </div>;
    }
}

export default MainApp;
