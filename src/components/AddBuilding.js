import React from 'react';
import '../App.css'
//Skeleton from reactjs website

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = { building: '', code: '', address: '', latitude: '', longitude: '' };
    }
    addBuilding() {
        var listing = {
            code: this.code.value.toUpperCase(),
            name: this.building.value
        }
        listing.coordinates = {
            latitude: this.latitude.value,
            longitude: this.longitude.value
        }
        listing.address = this.address.value
        this.props.addBuilding(listing);
    }
    render() {
        return (
            <form >
                <label>Enter New Building Here:</label>
                <br></br>
                <br></br>
                <label>
                    Name:
                    <input type="text" placeholder="Enter Name" ref={(building) => this.building = building} />
                </label>
                <label>
                    Code:
                    <input type="text" placeholder="Enter Code" ref={(code) => this.code = code} />
                </label>
                <label>
                    Address:
                    <input type="text" placeholder="Enter Address" ref={(address) => this.address = address} />
                </label>
                <label>
                    Latitude:
                    <input type="text" placeholder="Enter Latitude" ref={(latitude) => this.latitude = latitude} />
                </label>
                <label>
                    Longitude:
                    <input type="text" placeholder="Enter Longitude" ref={(longitude) => this.longitude = longitude} />
                </label>
                <input className="Button" type="button" value="Add Building" onClick={this.addBuilding.bind(this)} />
            </form>
        );
    }
}
export default AddBuilding;