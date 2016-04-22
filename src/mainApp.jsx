import React from 'react';
import NavLink from './NavLink'
import $ from 'jquery'

// Main Application Class

class MainApp extends React.Component {

  render() {
    // Check If User Logged in with Facebook or not
    const auth = false; //this.props.auth;

    if (auth) {
      return <div>
      <div id = "header">
      <div id = "headerLogo">
      <img src ="./img/cv.png" id = "headerLogoImg"/>
      </div>
      <div id = "amusementTab">
      <div id = "profile">
      <img src = "./img/profile.png" id ="profilePic"/>
      <div id = "profileName">
      <div>Chonlathorn Kwan.</div>
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
      <div className = "menuList" id = "createMenu" data-toggle="modal" data-target="#createEvent"><img src ="./img/plus.png" className = "menuIcon"/>Create</div>
      <div className = "menuList" id = "mylistMenu"><img src ="./img/list.png" className = "menuIcon"/>My list</div>
      <div className = "menuList" id = "allMenu"><img src ="./img/all.png" className = "menuIcon"/>All</div>
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
      <div>Chonlathorn Kwan.</div>
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
      <a href="/">
      <div id="loginBut">
      <img src = "./img/fb_logo.gif" id ="fbLogo"/>
      <span id = "loginFb">Login with Facebook</span>
      </div>
      </a>
      </div>
      </div>
      </div></div>
    }
  }
}

export default MainApp;
