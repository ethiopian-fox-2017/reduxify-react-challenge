import React, { Component } from 'react';

import '../App.css';
import ListItem from './ListItem';
import SearchAPI from './SearchAPI';


class Home extends Component {

  constructor(){
      super();
      this.state = {
        data: []
      }
      this.addOneData = this.addOneData.bind(this);
  }

  addOneData(type, item){
    console.log(item);
    fetch(`http://swapi.co/api/${type}/${item}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({data: this.state.data.concat(data)});
    })
    .catch(err => console.error(err))

  }

  

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <SearchAPI addData={this.addOneData} />
        <ListItem  />
      </div>
    );
  }
}

export default Home;
