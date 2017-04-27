import React from 'react';

import DeleteButton from './DeleteButton';

class Item extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <li > {this.props.data.name} <DeleteButton deletedId={this.props.data.id} /> </li>
    )
  }

}

export default Item;
