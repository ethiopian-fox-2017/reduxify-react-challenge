export const fetchTracks = () => {
  return (dispatch) =>
    fetch('https://api.spotify.com/v1/artists/3yY2gUcIsjMr8hjo51PoJ8/top-tracks?country=SE')
      .then(res => res.json())
      .then(data => dispatch(fetchTracksSuccess(data.tracks)))
}


export const fetchTracksSuccess = (tracks) => {
  return {
    type: 'FETCH_TRACKS_SUCCESS',
    payload: tracks
  }
}

export const checkLoginStatus = () => {
    return (
      (window.localStorage.user) ?
        {
          type: 'CHECK_STATUS_LOGIN',
          payload: true
        }
      :
        {
          type: 'CHECK_STATUS_LOGIN',
          payload: false
        }
    )

}
