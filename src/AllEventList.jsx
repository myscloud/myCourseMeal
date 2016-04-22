import React from 'react';
import NavLink from './NavLink'

class AllEventList extends React.Component {
  render() {
  	return(
  	<div id="container" className="row">
		<div className = "col-xs-1 col-sm-1 col-lg-1"></div>
		<div className = "col-xs-1 col-sm-1 col-lg-1"></div>
		<div className = "col-xs-1 col-sm-1 col-lg-1"></div>

		<div id = "contentBox" className = "col-xs-8 col-sm-8 col-lg-8 ">
			<EventCard/>
			
		</div>
		

		
		<div className = "col-xs-1 col-sm-1 col-lg-1"></div>
	</div>
	);
  }
}

class EventCard extends React.Component{
	render(){
		return(
			<div className ="content row whiteBg">
				<div className = "foodPicDiv col-xs-4 col-sm-4 col-lg-4">
					<img src = "./img/bbq.jpg" className = "foodPic"/>
				</div>
				<div className = "contentDetail col-xs-8 col-sm-8 col-lg-8">
					<div className ="contentDetailText">
						<br/>

						<div className="detailPlace"><span className ="bold">Place </span> : BBQ Plaza</div>
						<div className="detailDate"><span className ="bold">Date </span> : 22/4/16</div>
						<div className="detailTime"><span className ="bold">Time </span> : 9.00-12.00</div>
						<div className="detailOwner"><span className ="bold">Owner </span> : Chonlathorn Kwan.<div className="detailOwnerPicDiv"><img src="./img/profile.png" className = "detailOwnerPicDiv"/></div></div>
						<div className="detailQuantity"><span className ="bold">Hungers </span> : 3/10</div>
					</div>
					<br/><br/>
					<div className ="contentDetailButGr">
						<button type="button" className="btn btn-info" data-toggle="modal" data-target="#comment">Comment </button>
						<button type="button" className="btn btn-warning" data-toggle="modal" data-target="#hungerList">Hungers </button>
					</div>
				</div>
			</div>
			
			);
	}
}
export default AllEventList;
