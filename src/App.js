import React from "react";
import axios from "axios";
import SearchBar from "./components/searchBar";
import CityList from "./components/cityList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.baseURL =
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin";
    this.state = {
      citys: []
    };
  }

  getDate(){
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();
      return dd + '-' + mm + '-' + yyyy;
  }

  onSearchSubmit = async (term) => {
    const response = await axios.get(this.baseURL, {
      params: {
        pincode:term,
        date: this.getDate()
      },
    });

    console.log(response.data.sessions);

    this.setState({ citys: response.data.sessions });
  };

  render() {
    let text = ""
    if( this.state.citys.length === 0){
      text = "Total hospitals found 0"
    }
    else{
      text = "Total hospitals found in "  + this.state.citys[0].district_name +" are " + String(this.state.citys.length)

    }
    return (
      <div className="ui padded container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h2>{text}</h2>
        <CityList citys={this.state.citys} />
      </div>
    );
  }
}

export default App;
