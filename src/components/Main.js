import React, { Component } from 'react'
import axios from 'axios'
import secret from '../config'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  getAPIData() {
    let self = this
    axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city', {
      headers: {'user-key': secret.ZOMATO_API}
    }).then(res=> {
      self.setState({
        data: res.data.restaurants
      })
    }).catch(err=> {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getAPIData()
  }

  render() {
    return (
      <div className="Main">

      { this.state.data.length > 0 ? (
        <div className="columns is-multiline main-app">
          {this.state.data.map(each => {
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

export default Main