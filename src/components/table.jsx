import React, { Component } from 'react';
import Popup from './popup';

class Table extends Component{
	state = {
		isOpen : false,
		selectedUser: {},
		users: [
			{
				id: 1,
				first:"Mark",
				last:"Otto",
				handle:"@mdo",
				location: "Jearsy"
			},
			{
				id: 2,
				first:"Jacob",
				last:"Thornton",
				handle:"@fat",
				location: "Ontorio"
			},
			{
				id: 3,
				first:"Larry",
				last:"Bird",
				handle:"@lbd",
				location: "Vegas"
			}
		]
	};

	showPopUp(user){
		console.log("USER ", user);
		this.setState({
			isOpen: true,
			selectedUser:user
		})
	}

	hidePopUp(){
		console.log("HIDING Popup")
		this.setState({
			isOpen:false,
			selectedUser: {}
		})
	}

	render(){
		return(
			<div>
				<table className="table table-hover table-dark">
				  <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">First</th>
				      <th scope="col">Last</th>
				      <th scope="col">Handle</th>
				    </tr>
				  </thead>
				  <tbody>
				  		{this.state.users.map(user =>
				  			<tr key={user.id} onClick={()=>this.showPopUp(user)}>
					  			<th scope="row">{user.id}</th>
								<td>{user.first}</td>
								<td>{user.last}</td>
								<td>{user.handle}</td>
				  			</tr>
				  		)}
				  </tbody>
				</table>

				<Popup show={this.state.isOpen} onClose={this.hidePopUp} user={this.state.selectedUser}/>
			</div>
		)
	}
}

export default Table;