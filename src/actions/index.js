import * as ActionTypes from './actionTypes';

export const addData = (data) => {
  return {
    type: ActionTypes.ADD_DATA,
    payload: data
  }
}

export const fetchDataSearch = (query) => {
  return (dispatch) => {
    fetch(`http://swapi.co/api/${query.type}/${query.item}`)
    .then(response => response.json())
    .then(data => { dispatch(addData(data)) })
    .catch(err => console.error(err))
  }
}

export const fetchDataSuccess = (data) => {
  return {
    type: ActionTypes.FETCH_DATA_SUCCESS,
    payload: data
  }
}

export const fetchData = () => {
  return (dispatch) => {
    fetch('http://swapi.co/api/starships/')
    .then(response => response.json())
    .then(data => { dispatch(fetchDataSuccess(data)) })
    .catch(err => console.error(err))
  }
}

export const deleteData = (itemId) => {
  return {
    type: ActionTypes.DELETE_DATA,
    payload: itemId
  }
}
