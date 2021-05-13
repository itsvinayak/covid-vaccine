import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment" style={{marginTop: 30  }}> 
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
          <div className="field">
            <div className="ui black ribbon label">Search District's pincode</div>

            <div className="ui input focus" style={{ marginTop: "10px" }}>
              <input
                type="text"
                placeholder="Search..."
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
