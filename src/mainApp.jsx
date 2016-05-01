import React from 'react';
import FacebookLogin from 'react-facebook-login';
import NavLink from './NavLink'
import $ from 'jquery'

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
    if(this.state.userName) {
      return <div>
      <div id = "header">
      <div id = "headerLogo">
      <img src ="./img/cv.png" id = "headerLogoImg"/>
      </div>
      <div id = "amusementTab">
      <div id = "profile">
      <img src = {this.state.userImgSrc} id ="profilePic"/>
      <div id = "profileName">
      <div>{this.state.userName}</div>
      </div>
      </div>
      <div id = "logout">
      <img src = "./img/logout.png" id ="logoutPic"/>
      <div id = "logoutText">
      <div>Log Out</div>
      </div>
      </div>
      </div>
      </div><br/>
      {this.props.children}
      <div id = "menu" >
      <div className = "menuList" id = "createMenu" data-toggle="modal" data-target="#createEvent"><img src ="./img/plus.png" className = "menuIcon"/><NavLink to ="/create">Create</NavLink></div>
      <div className = "menuList" id = "mylistMenu"><img src ="./img/list.png" className = "menuIcon"/>My list</div>
      <div className = "menuList" id = "allMenu"><img src ="./img/all.png" className = "menuIcon"/><NavLink to="/">All</NavLink></div>
      <div className = "menuList" id = "notiMenu"><img src ="./img/noti.png" className = "menuIcon"/>Notification</div>
      </div>

      <div id="createEvent" className="modal fade" role="dialog">
      <div className="modal-dialog">


      <div className="modal-content">
      <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
      <h4 className="modal-title">Create Party</h4>
      </div>
      <div className="modal-body">
      <div className="row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createPlace col-xs-4 col-sm-4 col-lg-4"><span className ="bold">Place </span> : </div><input type="text" className="form-control createInput"></input>
      </div>
      <br/>
      <div className="row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createDate col-xs-4 col-sm-4 col-lg-4"><span className ="bold">Date </span> : </div><input type="text" className="form-control createInput"></input>
      </div>
      <br/>
      <div className = "row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createTime col-xs-4 col-sm-4 col-lg-4"><span className ="bold">Time </span> : </div><input type="text" className="form-control createInput"></input>
      </div>
      <br/>
      <div className = "row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createPic col-xs-4 col-sm-4 col-lg-4"><span className ="bold">PictureURL </span> : </div><input type="text" className="form-control createInput"></input>
      </div>
      <br/>
      <div className="row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createPrice col-xs-4 col-sm-4 col-lg-4"><span className ="bold">Price </span> : </div><input type="text" className="form-control createInput"></input>
      </div>
      <br/>
      <div className="row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createHunger col-xs-4 col-sm-4 col-lg-4"><span className ="bold">Maximum Hungers </span> : </div><input type="text" className="form-control createInput"></input>
      </div>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-blue" data-dismiss="modal">Create</button>
      </div>
      </div>

      </div>
      </div>

      <div id="confirmJoin" className="modal fade" role="dialog">
      <div className="modal-dialog">


      <div className="modal-content">
      <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
      <h4 className="modal-title">Are you Hungry?</h4>
      </div>
      <div className="modal-body">
      <h4>Do you want to join this 'CourseMeal'?</h4>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-success" data-dismiss="modal">Yes</button>
      <button type="button" className="btn btn-danger" data-dismiss="modal">No</button>
      </div>
      </div>

      </div>
      </div>

      <div id="comment" className="modal fade" role="dialog">
      <div className="modal-dialog">


      <div className="modal-content">
      <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
      <h4 className="modal-title">Comment</h4>
      </div>
      <div className="modal-body" id="commentBody">
      <div className="commentBox">

      <div className = "commentProfile">
      <img src = "./img/profile.png" className ="commentProfilePic"/>
      <div className = "commentProfileName">
      <div>{this.state.userName}</div>
      </div>
      </div>
      <br/>
      <div className="commentText">
      comment............
      </div>
      </div>
      <br/>
      <div className="commentBox">

      <div className = "commentProfile">
      <img src = "./img/profile.png" className ="commentProfilePic"/>
      <div className = "commentProfileName">
      <div>Chonlathorn Kwan.</div>
      </div>
      </div>
      <br/>
      <div className="commentText">
      comment............
      </div>
      </div>

      </div>
      <div className="modal-footer">
      <input type="text" className="form-control commentInput"></input><button type="button" className="btn btn-blue" data-dismiss="modal">Comment</button>
      </div>
      </div>

      </div>
      </div>

      <div id="hungerList" className="modal fade" role="dialog">
      <div className="modal-dialog">


      <div className="modal-content">
      <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
      <h4 className="modal-title">Hungers</h4>
      </div>
      <div className="modal-body" id="commentBody">
      <div className="hungerBox">

      <div className = "hungerProfile">
      <img src = "./img/profile.png" className ="hungerProfilePic"/>
      <div className = "hungerProfileName">
      <div>Chonlathorn Kwan.</div>
      </div>
      <button type="button" className="btn btn-danger kick" data-dismiss="modal">Kick</button>
      </div>



      </div>
      <br/>
      <div className="hungerBox">

      <div className = "hungerProfile">
      <img src = "./img/profile.png" className ="hungerProfilePic"/>
      <div className = "hungerProfileName">
      <div>Chonlathorn Kwan.</div>
      </div>
      <button type="button" className="btn btn-danger kick" data-dismiss="modal">Kick</button>
      </div>


      </div>

      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-danger" data-dismiss="modal">Destroy</button>
      </div>
      </div>

      </div>
      </div>
      </div>
    } else {
      return <div> <div id="loginBackground">
      <div id="loginContainer">
      <div id = "logo">
      <img src="./img/cv.png" id= "cmlogo"/>
      </div>
      <div id = "loginButContainer">
      <FacebookLogin
          appId="1762654480633676"
          autoLoad={true}
          callback={this.checkLoginState.bind(this)}
          scope="public_profile,user_friends" id ="fbLogo"/>
      
      </div>
      </div>
      </div></div>
    }
  }

    displayAllStatus() {

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
      }
      // else if(response.status == 'not_authorized')
      else {
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
