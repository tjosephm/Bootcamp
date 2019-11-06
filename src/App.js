import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from "./components/AddBuilding";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      listings: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({ filterText: value });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({ selectedBuilding: id });
  }

  addBuilding(newBuilding) {
    var count = 1;
    var id = this.props.data.filter(
      listing => {
        count++
        return listing
      }
    )
    id = count;
    var name = newBuilding.name;
    var code = newBuilding.code;
    var address = newBuilding.address;
    var latitude = newBuilding.coordinates.latitude;
    var longitude = newBuilding.coordinates.longitude;

    var curDirectory = {
      id: id,
      code: code,
      name: name,
      address: address,
      coordinates: {
        latitude: latitude,
        longitude: longitude
      }
    }

    const newDir = this.state.listings
      .map(value => { return value })
      .concat(curDirectory)

    this.setState({ listings: newDir })
  }

  deleteByID() {
    var listings = this.state.listings.filter(listing => {
      return listing.id !== this.state.selectedBuilding.id
    })
    this.setState({ listings: listings })
  }

  render() {

    return (
      <div className="bg">
        <div className="row">
          <header>UF Directory App</header>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.listings}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.state.listings}
                selectedUpdate={this.state.selectedBuilding}
                deleteByID={this.deleteByID.bind(this)}
              />
              <AddBuilding
                addBuilding={this.addBuilding.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}
export default App;