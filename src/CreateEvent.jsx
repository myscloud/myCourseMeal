import React from 'react';
import $ from 'jquery';

//[MAIN] Create Event
class CreateEvent extends React.Component {
  render() {
    return (
      <div>
        <h1>Create An Event</h1>
        <EventForm/>
      </div>
    );
  }
}
export default CreateEvent;

// Event Form
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
  handlePicUrlChange(e){
     this.setState({pic_url: e.target.value});
  }

  handleFormSubmit(e) {
    e.preventDefault();
    //Perform Ajax Transmission
    $.ajax({
      url: './createEvent',
      dataType: 'json',
      type: 'POST',
      data: this.state,
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
      <div>
        <div className="form-group">
          <input type="text" value={this.state.owner} onChange={this.handleOwnerChange.bind(this)} className="form-control input-md" placeholder=""/><br/>
          <input type="text" value={this.state.place} onChange={this.handlePlaceChange.bind(this)} className="form-control input-md" placeholder=""/><br/>
          <input type="text" value={this.state.max_person} onChange={this.handleMaxPersonChange.bind(this)} className="form-control input-md" placeholder=""/><br/>
          <input type="text" value={this.state.price} onChange={this.handlePriceChange.bind(this)} className="form-control input-md" placeholder=""/><br/>
          <input type="text" value={this.state.pic_url} onChange={this.handlePicUrlChange.bind(this)} className="form-control input-md" placeholder=""/><br/>
          <input type="text" value={this.state.date} onChange={this.handleDateChange.bind(this)} className="form-control input-md" placeholder=""/><br/>
          <button className='btn btn-lg btn-primary' onClick={(event) => this.handleFormSubmit(event)}>SUBMIT</button>
        </div>
      </div>
    );
  }
}
