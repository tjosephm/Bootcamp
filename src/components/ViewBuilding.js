import React from 'react';
import "../App.css"

class ViewBuilding extends React.Component {
	render() {
		const curBuilding = this.props.data.find(selected => {
			return selected.id === this.props.selectedUpdate.id
		})
		if (curBuilding === undefined)
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		else if (curBuilding.coordinates !== undefined)
			return (
				<div>
					<p>
						<b>NAME: </b> {curBuilding.name}
						<br />
						<b>CODE: </b> {curBuilding.code}
						<br />
						<b>ADDRESS: </b> {curBuilding.address}
						<br />
						<b>COORDINATES: </b>
						<br />{curBuilding.coordinates.latitude}, {curBuilding.coordinates.longitude}
						<br />
						<b>  <button className="Button" type="button" value="Remove Building" onClick={() => this.props.deleteByID()}>Remove Building</button> </b>
					</p>
				</div>
			);
		else return (
			<div>
				<p>
					<b>NAME: </b> {curBuilding.name}
					<br />
					<b>CODE: </b> {curBuilding.code}
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