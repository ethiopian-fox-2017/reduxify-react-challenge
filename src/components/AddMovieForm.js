import React from 'react';
import { connect } from 'react-redux';

import { addMovie } from '../actions';

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Add New Movie</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.addMovie(this.state.title);
          this.setState({title: ''});
          }
        }>
          <input type="text" value={this.state.title} onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Add Movie" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (title) => dispatch(addMovie(title))
  }
}

export default connect(null, mapDispatchToProps)(AddMovieForm);
