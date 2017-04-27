import React from 'react'
import { connect } from 'react-redux'

import { fetchCharacters, deleteCharacter } from '../../actions'


class Characters extends React.Component {

  componentDidMount() {
    this.props.fetchCharacters()
  }

  render() {
    return (
      <div>
      { this.props.characters.length === 0 && <h2>Loading...</h2>}
        <ul>
          { this.props.characters.map(character => <li key={character.id}>{character.name} <button onClick={() => this.props.deleteCharacter(character.id)}>X</button></li>)}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  characters: state.characters,
})

const mapDispatchToProps = dispatch => ({
  fetchCharacters: () => dispatch(fetchCharacters()),
  deleteCharacter: id => dispatch(deleteCharacter(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Characters);
