import React from 'react';
import { connect } from 'react-redux';

import { fetchDataSearch } from '../actions';

class SearchAPI extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        searchText: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <p>What do you want to search from Star Wars using id ? <input onChange={this.handleChange} value={this.state.searchText} type="text"></input></p>
        <div>
          <button name="starships" onClick={this.handleSubmit}>Search Starships</button>
          <button name="people" onClick={this.handleSubmit}>Search People</button>
          <button name="planets" onClick={this.handleSubmit}>Search Planets</button>
        </div>
      </div>
    )
  }

  handleChange(e){
    this.setState({searchText: e.target.value});
  }

  handleSubmit(e){
    const query = {
      type: e.target.name,
      item: this.state.searchText
    };
    this.props.searchData(query);
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    searchData: (query) => dispatch(fetchDataSearch(query))
  }
}

export default connect(null, mapDispatchToProps)(SearchAPI);
