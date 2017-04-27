import React from 'react';
import { connect } from 'react-redux';

import { deleteData } from '../actions';

const buttonStyle = {
  background: 'red',
  cursor: 'pointer',
  outline: 'none',
  color: 'white',
  border: 0,
  borderRadius: 10
};

const DeleteButton = (props) => (
  <button
    onClick={()=> props.removeItem(props.deletedId)}
    style={buttonStyle}
    >
    X
  </button>
);

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (deletedId) => dispatch(deleteData(deletedId))
  }
}

export default connect(null, mapDispatchToProps)(DeleteButton);
