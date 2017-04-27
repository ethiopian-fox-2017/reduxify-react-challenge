import React from 'react';
import { connect } from 'react-redux'

import Item from './Item';
import { fetchData } from '../actions';
import logo from '../logo.svg';

class ListItem extends React.Component {

  componentDidMount(){
    this.props.fetchData();
  }

  render(){
    return (
      <div>
      {this.props.items.length === 0 && <img src={logo} style={styles.loading} alt="logo" />}
      <ul>
        { this.props.items.map((item) => {
          // console.log(item);
          return (
          <Item key={item.id} data={item} ></Item>
          )
        })
        }
      </ul>
      </div>
    )
  }

}

const styles = {
  loading: {
    animation: 'App-logo-spin infinite 1s linear',
    height: 200
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.datas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: ()=> dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
