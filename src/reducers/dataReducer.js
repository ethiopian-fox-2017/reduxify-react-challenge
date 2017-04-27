import * as ActionTypes from '../actions/actionTypes';

const initialState = [
  // {id: 1, name: 'Sam'},
  // {id: 2, name: 'Joe'},
  // {id: 3, name: 'Mann'}
]

const addData = (state, data) => {
  const ids = state.map(item => item.id);
  const newId = Math.max(...ids) + 1;
  const newItem = {
    id: newId,
    ...data
  };
  const newState = [...state, newItem];
  return newState;
}

const fetchData = (state, data) => {
  const newState = data.results.map((dt, index) => (
    {id: index+1, ...dt}
  ));
  return newState;
}

const removeData = (state, itemId) => {
  // const deletedId = itemId;
  const newState = state.filter(item => item.id !== itemId);
  return newState;
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_SUCCESS: return fetchData(state, action.payload);
    case ActionTypes.ADD_DATA: return addData(state, action.payload);
    case ActionTypes.DELETE_DATA: return removeData(state, action.payload);
    default: return state;

  }
}

export default dataReducer;
