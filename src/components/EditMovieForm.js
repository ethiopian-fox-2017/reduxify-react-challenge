import React from 'react';
import { connect } from 'react-redux';

import { editMovieTitle } from '../actions'

class EditMovieForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newMovieTitle: this.props.newMovieTitle,
      episode_id: this.props.episode_id
    }
  }

  handleChange(e) {
    this.setState({ newMovieTitle: e.target.value });
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.editMovieTitle(this.state.episode_id, this.state.newMovieTitle);
        this.setState({newMovieTitle: 'edit success'});
        }
      }>
        <input type="text" value={this.state.newMovieTitle} onChange={this.handleChange.bind(this)} />
        <input type="submit" value="Edit Title" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editMovieTitle: (episode_id, newMovieTitle) => dispatch(editMovieTitle(episode_id, newMovieTitle))
  }
}

export default connect(null, mapDispatchToProps)(EditMovieForm);
