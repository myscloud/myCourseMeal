import React from 'react';
import $ from 'jquery';

//[MAIN] Create Event
class CreateEvent extends React.Component {
  render() {
    return (
      <div>
        <EventForm/>
      </div>
    );
  }
}
export default CreateEvent;


class EventForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        owner : '',
        place : '',
        max_person: '',
        price: '',
        pic_url: '',
        date: ''
      };
  }

  handlePlaceChange(e){
     this.setState({place: e.target.value});
  }
  handleOwnerChange(e){
     this.setState({owner: e.target.value});
  }
  handleMaxPersonChange(e){
     this.setState({max_person: e.target.value});
  }
  handlePriceChange(e){
     this.setState({price: e.target.value});
  }
  handleDateChange(e){
     this.setState({date: e.target.value});
  }
  handleTimeChange(e){
     this.setState({time: e.target.value});
  }
  handlePicUrlChange(e){
     this.setState({pic_url: e.target.value});
  }

  componentDidMount() {
    FB.api('/me', function(response) {
      this.setState({owner: response.id});
      console.log(response.id);
    }.bind(this)); 
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
     
    //Perform Ajax Transmission
    $.ajax({
      url: './api/addParty',
      dataType: 'json',
      type: 'POST',
      data: JSON.stringify(this.state),
      success: function(data) {
        this.setState({data: data});
        console.log("REDIRECT !!");
      }.bind(this),
      error: function(xhr, status, err) {

        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    this.setState({  owner : '',
      place : '',
      max_person: '',
      price: '',
      pic_url: '',
      date: ''});

  }

  render() {
    return (
  
  <div id="container" className="row">
    <div className = "col-xs-1 col-sm-1 col-lg-1"></div>
    <div className = "col-xs-1 col-sm-1 col-lg-1"></div>
    <div className = "col-xs-1 col-sm-1 col-lg-1"></div>

    <div id = "contentBox" className = "col-xs-8 col-sm-8 col-lg-8 ">
      <div class="modalContainer">
      <div className="modal-header">
      <h4 className="modal-title">Create Party</h4>
      </div>
      <div className="modal-body">
      <div className="row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createPlace col-xs-4 col-sm-4 col-lg-4"><span className ="bold">Place </span> : </div><input type="text" value={this.state.place} onChange={this.handlePlaceChange.bind(this)} className="form-control createInput"></input>
      </div>
      <br/>
      <div className="row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createDate col-xs-4 col-sm-4 col-lg-4"><span className ="bold">Date </span> : </div><input type="text" value={this.state.date} onChange={this.handleDateChange.bind(this)} className="form-control createInput"></input>
      </div>
      <br/>
      <div className = "row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createTime col-xs-4 col-sm-4 col-lg-4"><span className ="bold">Time </span> : </div><input type="text" value={this.state.time} onChange={this.handleTimeChange.bind(this)} className="form-control createInput"></input>
      </div>
      <br/>
      <div className = "row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createPic col-xs-4 col-sm-4 col-lg-4"><span className ="bold">PictureURL </span> : </div><input type="text" value={this.state.pic_url} onChange={this.handlePicUrlChange.bind(this)} className="form-control createInput"></input>
      </div>
      <br/>
      <div className="row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createPrice col-xs-4 col-sm-4 col-lg-4"><span className ="bold">Price </span> : </div><input type="text" value={this.state.price} onChange={this.handlePriceChange.bind(this)} className="form-control createInput"></input>
      </div>
      <br/>
      <div className="row">
      <div className ="col-xs-1 col-sm-1 col-lg-1"></div>
      <div className="createHunger col-xs-4 col-sm-4 col-lg-4"><span className ="bold">Maximum Hungers </span> : </div><input type="text" value={this.state.max_person} onChange={this.handleMaxPersonChange.bind(this)} className="form-control createInput"></input>
      </div>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-blue" data-dismiss="modal" onClick={this.handleFormSubmit.bind(this)}>Create</button>
      </div>
      </div>
      
      
    </div>
    

    
    <div className = "col-xs-1 col-sm-1 col-lg-1"></div>
  </div>
      
  
    );
  }
}
