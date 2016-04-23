import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class EventDiscussion extends React.Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		isOpen: false,
    		data: [],
    		currentComment: '',
    		userId: ''
    	};
    }

    componentDidMount() {
	    FB.api('/me', function(response) {
	      this.setState({userId: response.id});
	    }.bind(this)); 
	  }

    openModal() {
    	$.ajax({
    		url: './api/getComments',
    		dataType: 'json',
    		type: 'POST',
    		data: JSON.stringify({partyId: this.props.partyId}),
    		success: function(data) {
    			if(data.comments){
    				this.setState({data: data.comments});
    			}
    		}.bind(this)
    	});
    	this.setState({isOpen: true});
    }

    hideModal() {
    	this.setState({isOpen: false});
    }

    handleInputBoxChange(e) {
    	this.setState({currentComment: e.target.value});
    }

    handleFormSubmit(e) {
    	e.preventDefault();
    	$.ajax({
    		url: './api/commentOnParty',
    		dataType: 'json',
    		type: 'POST',
    		data: JSON.stringify({partyId: this.props.partyId, 
    			commenter: this.state.userId,
    			commentContent: this.state.currentComment}),
    		success: function(data) {
    			console.log("comment successfully!");
    		}.bind(this)
    	});
    	this.setState({currentComment: ''});
    	this.openModal();
    }

    render() {
    	let partyComments = this.state.data.map((comment => {
    				return <EventDiscussionBox commenterID={comment.commenter} content={comment.content} commentTime={comment.commentTIme} />;
    			}));
        return (
        <div>
	        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#comment" onClick={this.openModal.bind(this)}>Comment </button>
			<Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal.bind(this)}>
				<ModalHeader>
					<ModalClose onClick={this.hideModal.bind(this)} />
					<ModalTitle>Comment</ModalTitle>
				</ModalHeader>
				<ModalBody>
					{partyComments}
				</ModalBody>
				<ModalFooter>
					<input type="text" className="form-control commentInput" onChange={this.handleInputBoxChange.bind(this)} value={this.state.currentComment}></input>
					<button type="button" className="btn btn-blue" data-dismiss="modal" onClick={this.handleFormSubmit.bind(this)}>Comment</button>
				</ModalFooter>
			</Modal>
		</div>
        );
    }
}

class EventDiscussionBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			commenterName: '',
			commenterPic: ''
		};
	}

	componentDidMount() {
		FB.api('/' + this.props.commenterID, function(response) {
	      this.setState({commenterName: response.name});
	    }.bind(this)); 

	    FB.api('/' + this.props.commenterID + '/picture', function(response) {
	      this.setState({commenterPic: response.data['url']});
	    }.bind(this)); 
	}

	render() {
		return (
			<div className="commentBox">
				<div className="commentProfile">
		            <img src={this.state.commenterPic} className="commentProfilePic" />
		            <div className="commentProfileName">
		                <div>{this.state.commenterName}</div>
		            </div>
		        </div>
		        <br/>
				<div className="commentText">
					{this.props.content}
				</div>
			</div>
		);
	}
}

export default EventDiscussion;
