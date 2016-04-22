import React from 'react';
import FacebookLogin from 'react-facebook-login';
import NavLink from './NavLink'

// Main Application Class

class MainApp extends React.Component {

    constructor() {
      super();
      this.initialFacebookSDK();
      this.state = {
        loggedIn: false,
        userName: '',
        userFbId: 0,
        userImgSrc: ''
      };
    }

    render() {
      if(this.state.userName){
        return <div>
          <h1>myCourseMeal</h1>
          <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/newsfeed">newsfeed</NavLink></li>
          <li><NavLink to="/welcome">welcomepage</NavLink></li>
          </ul>
          {this.props.children}

          <br /><br />
          <div id="status"></div>
          <div>{this.state.userName}</div>
          <img src={this.state.userImgSrc} />
          <FacebookLogin
            appId="1762654480633676"
            autoLoad={true}
            callback={this.checkLoginState.bind(this)}
            scope="public_profile,user_friends" /><br />
          <button onClick={this.userLogout.bind(this)}>Log out</button>
        </div>;
      }else{
        return(
        <div>
        <h1> You are not Logged in </h1>
        <FacebookLogin
          appId="1762654480633676"
          autoLoad={true}
          callback={this.checkLoginState.bind(this)}
          scope="public_profile,user_friends" />
        </div>
      );
      }
    }

    handleAuthStatus(response) {
      if(response.status == 'connected') {
        this.setState({loggedIn: true});
        FB.api('/me', function(response) {
          this.setState({userName: response.name, userFbId: response.id});
        }.bind(this));
        FB.api('/me/picture', function(response) {
          this.setState({userImgSrc: response.data['url']});
        }.bind(this));
        document.getElementById('status').innerHTML = "you are logged in!";
      }
      // else if(response.status == 'not_authorized')
      else {
        document.getElementById('status').innerHTML = "please log in";
      }
    }

    userLogout() {
      FB.getLoginStatus(function(response) {
        if(response && response.status == 'connected') {
          FB.logout(function(response) {
            console.log("logging out...");
          });
        }
      });
    }

    checkLoginState() {
      FB.getLoginStatus(function(response) {
        this.handleAuthStatus(response);
      }.bind(this));
    }

    initialFacebookSDK() {
      window.fbAsyncInit = function() {
      FB.init({
        appId      : 1762654480633676,
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.5' // use graph api version 2.5
      });


      FB.getLoginStatus(function(response) {
        this.handleAuthStatus(response);
      });

      };

      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
}

export default MainApp;
