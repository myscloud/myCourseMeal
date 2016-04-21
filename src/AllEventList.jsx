import React from 'react';
import NavLink from './NavLink'


class AllEventList extends React.Component {
  constructor(props) {
    super(props);
    let mockup = [ {id : 1 ,owned : 'True' ,owner : 'Tutor' , place : 'Fuku Salmon' , price : '500-900' , date :'15-06-2016' , max_person:'3' , pic_url:'https://placehold.it/350x150'},
      {id : 2 ,owned : 'False' ,owner : 'Tontontonton' , place : 'Salmon' , price : '500-900' , date :'10-06-2016' , max_person:'20' , pic_url:'https://placehold.it/350x150'},
      {id : 3 ,owned : 'True' ,owner : 'Kamkam' , place : 'BBQ Plaza' , price : '349' , date :'10-06-2016' , max_person:'10' , pic_url:'https://placehold.it/350x150'}
    ];
    this.state = {
      mock : mockup
    };
  }

  render() {
    return(
      <div>
        <EventList data = {this.state.mock} />
      </div>
    );
  }
}

export default AllEventList;

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : this.props.data
    };
  }
  render() {
    let EventNodes = this.state.data.map((item) => {
      return (
        <div> {item.owner} <img src={item.pic_url}></img></div>
      );
    })

    return(
      <div>
          {EventNodes}
      </div>
    );
  }
}
