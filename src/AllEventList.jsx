import React from 'react';
import NavLink from './NavLink'

import EventDiscussion  from './EventDiscussion' // Chat in the event <- FB 

class AllEventList extends React.Component {

   constructor(props) {
   	 super(props);
   	 this.state = {
   	 	data: []
   	 };
   }

   componentDidMount() {
    FB.api('/me', function(response) {
      this.setState({owner: response.id});
      console.log(response.id);
    }.bind(this)); 
  }

  render() {
  	console.log(this.state.data);
  	let events = this.state.data.map((party =>  {
  		return <EventCard place={party.place} pdate={party.date} ptime={party.time} owner={party.owner} pic_url={party.pic_url} pid={party._id} />;
  	}));
  	return(
  	<div id="container" className="row">
		<div className = "col-xs-1 col-sm-1 col-lg-1"></div>
		<div className = "col-xs-1 col-sm-1 col-lg-1"></div>
		<div className = "col-xs-1 col-sm-1 col-lg-1"></div>

		<div id = "contentBox" className = "col-xs-8 col-sm-8 col-lg-8 ">
			{events}
		</div>
		<div className = "col-xs-1 col-sm-1 col-lg-1"></div>
	</div>
	);
  }

  componentDidMount() {
    //Perform Ajax Transmission
    $.ajax({
    url: './api/allPartyInApp',
    dataType: 'json',
    type: 'POST',
    data: JSON.stringify({userId: 10206121107369936}),
    success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  }
}

class EventCard extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			userPhoto: '',
		};
	}

	componentDidMount() {
	  	FB.api('/' + this.props.owner, function(response) {
	  		this.setState({userName: response.name});
	  	}.bind(this));
	  	FB.api('/' + this.props.owner + "/picture", function(response) {
	  		this.setState({userPhoto: response.data['url']});
	  	}.bind(this));
	  }

	render() {
		return(
			<div className ="content row whiteBg">
				<div className = "foodPicDiv col-xs-4 col-sm-4 col-lg-4">
					<img src = {this.props.pic_url} className = "foodPic" onerror="this.src='./img/bbq.jpg'"/>
				</div>
				<div className = "contentDetail col-xs-8 col-sm-8 col-lg-8">
					<div className ="contentDetailText">
						<br/>

						<div className="detailPlace"><span className ="bold">Place </span> : {this.props.place}</div>
						<div className="detailDate"><span className ="bold">Date </span> : {this.props.pdate}</div>
						<div className="detailTime"><span className ="bold">Time </span> : {this.props.ptime}</div>
						<div className="detailOwner"><span className ="bold">Owner </span> : {this.state.userName}<div className="detailOwnerPicDiv"><img src={this.state.userPhoto} className = "detailOwnerPicDiv"/></div></div>
						<div className="detailQuantity"><span className ="bold">Hungers </span> : 1/10</div>
					</div>
					<br/><br/>
					<div className ="contentDetailButGr">
						<EventDiscussion partyId={this.props.pid} />
						<button type="button" className="btn btn-warning" data-toggle="modal" data-target="#hungerList">Hungers </button>
					</div>
				</div>
			</div>
			);
	}
}
export default AllEventList;
