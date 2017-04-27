export const fetchDataSuccess = (results) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: results,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    fetch('http://swapi.co/api/films')
      .then(res => res.json())
      .then(data => dispatch(fetchDataSuccess(data.results)));
  };
};
