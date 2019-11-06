import React from 'react';
import "../App.css"

class ViewBuilding extends React.Component {
	render() {
		const currentBuilding = this.props.data.find(selected => {
			return selected.id === this.props.selectedUpdate.id
		})
		if (currentBuilding === undefined)
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		else if (currentBuilding.coordinates !== undefined)
			return (
				<div>
					<p>
						<b>NAME: </b> {currentBuilding.name}
						<br />
						<b>CODE: </b> {currentBuilding.code}
						<br />
						<b>ADDRESS: </b> {currentBuilding.address}
						<br />
						<b>COORDINATES: </b>
						<br />{currentBuilding.coordinates.latitude}, {currentBuilding.coordinates.longitude}
						<br />
						<b>  <button className="Button" type="button" value="Remove Building" onClick={() => this.props.deleteByID()}>Remove Building</button> </b>
					</p>
				</div>
			);
		else return (
			<div>
				<p>
					<b>NAME: </b> {currentBuilding.name}
					<br />
					<b>CODE: </b> {currentBuilding.code}
					<br />
					<b>ADDRESS: </b> None
						<br />
					<b>  <button className="Button" type="button" value="Remove Building" onClick={() => this.props.deleteByID()}>Remove Building</button> </b>
				</p>
			</div>
		)
	}
}
export default ViewBuilding;