import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../actions'

class Main extends Component {

  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {
    return (
      <div className="Main">

      { this.props.data.length > 0 ? (
        <div className="columns is-multiline main-app">
          {this.props.data.map(each => {
            return (
              <div key={each.restaurant.id} className="column is-3">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-2by1">
                      <img src={each.restaurant.featured_image} alt="test" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src={each.restaurant.thumb} alt="test" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4"><a href={each.restaurant.url} target="_blank">{each.restaurant.name}</a></p>
                      </div>
                    </div>
                    <div className="content">
                      <p>{each.restaurant.location.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>)
        : <h1 className="loading">Fetching data...</h1> }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)