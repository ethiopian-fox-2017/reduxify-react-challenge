import React from 'react'
import { connect } from 'react-redux'

import { fetchPlanets } from '../../actions'

class Planets extends React.Component {

  componentDidMount() {
    this.props.fetchPlanets()
  }

  render() {
    return (
      <div>
        {this.props.planets === 0 && <h2>Loading...</h2>}
        <ul>
          {this.props.planets.map(planet => (<li key={planet.id}>{planet.name}</li>))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planets: state.planets,
})

const mapDispatchToProps = dispatch => ({
  fetchPlanets: () => dispatch(fetchPlanets())
})


export default connect(mapStateToProps, mapDispatchToProps)(Planets)
