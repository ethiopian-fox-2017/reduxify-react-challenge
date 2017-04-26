import secret from '../config'
import axios from 'axios'
import { CHANGE_LOGIN, FETCH_SUCCESS } from '../constants'

export const changeLogin = (val) => ({
  type: CHANGE_LOGIN,
  payload: val
})

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data
})

export const fetchRestaurants = ()=> {
  return (dispatch)=> {
    axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city', {
      headers: {'user-key': secret.ZOMATO_API}
    }).then(res=> {
      dispatch(fetchSuccess(res.data.restaurants))
    }).catch(err=> {
      console.log(err)
    })
  }
}