import React from 'react';

var event = {
  name: "test_name",
  id: 0
}
//[MAIN] Create Event
class CreateEvent extends React.Component {
  render() {
    return (
      <div>
        <h1>Create An Eventttt</h1>
        <EventForm/>
      </div>
    );
  }
}
export default CreateEvent;

// Event Form
class EventForm extends React.Component {

  handleFormSubmit(event) {
      console.log(event)
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <input type="text" value={event.owner} className="form-control input-md" placeholder=""/><br/>
          <input type="text" value={event.place} className="form-control input-md" placeholder=""/><br/>
          <input type="text" value={event.max_person} className="form-control input-md" placeholder=""/><br/>
          <input type="text" value={event.price} className="form-control input-md" placeholder=""/><br/>
          <input type="text" value={event.pic} className="form-control input-md" placeholder=""/><br/>
          <button className='btn btn-lg btn-primary'
                  onClick={(e) => this.handleFormSubmit(e)}>
                </button>
        </div>
      </div>
    );
  }
}
