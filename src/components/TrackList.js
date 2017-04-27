import React from 'react';


const Card = (props) => (
    <div className="column is-3">
        <div className="card">
          <div className="card-image">
            <figure className="image is-1by1">
              <img src={props.track.album.images[0].url} alt="gambar-album" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={props.track.album.images[2].url} alt="gambar-ava" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{props.track.artists[0].name}</p>
              </div>
            </div>

            <div className="content">
              <p>Track Name: {props.track.name}</p>
              <a href={props.track.external_urls.spotify}> Link</a>
            </div>
          </div>
        </div>
    </div>
  )

export default Card;
