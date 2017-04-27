import React from 'react'
import { connect } from 'react-redux'

import { addCharacter } from '../../actions'

class CharForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange(e) {
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          const newChar = this.state
          this.props.addChar(newChar)
          }
        }>
         <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          placeholder='character name...'
         />
         <input type='submit' value='Add Character'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    addChar: character => dispatch(addCharacter(character))
})

export default connect(null, mapDispatchToProps)(CharForm)
