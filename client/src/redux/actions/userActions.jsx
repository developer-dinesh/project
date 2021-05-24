import {USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,USER_REGISTER_FAIL} from './actionTypes';
import axios from 'axios';

const userAction = (userName, firstName, lastName, emailId, phoneNumber, bio) => {
  return async dispatch => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST
      })
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post('http://localhost:5000/app/signup', {
        userName, firstName, lastName, emailId, phoneNumber, bio
      },
        config
      );
      console.log(data)
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data
      });
      console.log(data)
      //saving user to localstorage
      //localStorage.removeItem('userAuthData');
      localStorage.setItem('userData', JSON.stringify(data));
    } catch (error) {
      console.log(error);
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

export {userAction}