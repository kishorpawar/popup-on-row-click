import React, { Component } from 'react';

class Popup extends Component{

	
	render(){
		if(!this.props.show)
		{
			return null;
		}
		return(
			<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{display:'contents'}}>
			  	<div className="modal-dialog modal-dialog-centered" role="document">
			    	<div className="modal-content">
			      		<div className="modal-header">
			        		<h5 className="modal-title" id="exampleModalCenterTitle">{ this.props.user.first } { this.props.user.last }</h5>
			        		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          			<span aria-hidden="true">&times;</span>
			        		</button>
			      		</div>
			      		<div className="modal-body">
			        		<p>{this.props.user.first} {this.props.user.last} comes from the {this.props.user.location}.</p>
			        		<p>{this.props.user.first} {this.props.user.last}'s twitter handle is {this.props.user.handle}.</p>
				      	</div>
				      	<div className="modal-footer">
				        	<button type="button" className="btn btn-secondary" onClick={this.props.hidePopUp} data-dismiss="modal">Close</button>
				      	</div>
			    	</div>
			  	</div>
			</div>
		)
	}
}

export default Popup;