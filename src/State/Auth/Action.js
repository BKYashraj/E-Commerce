import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT
} from './ActionType';
import  { API_BASE_URL } from '../../config/apiConfig';
const token = localStorage.getItem("jwt");
// Register action creators
const registerRequest = () => ({ type: REGISTER_REQUEST });

const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload:user });

const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = userData => async dispatch => {
  
  dispatch(registerRequest());

  try {
    // axios.post commonly used to send data to a server.

    const response=await axios.post(`${API_BASE_URL}/auth/signup`, userData);

    // sends a POST request to the specified URL with the provided user data, and it waits for the response from the server. The response object will be used to handle the outcome of the request in the subsequent code (checking for success or handling errors).

    const user = response.data;  
    // extracts the data property from the response

    if(user.jwt) localStorage.setItem("jwt",user.jwt)
    // Storing the JWT in localStorage is a common approach for persisting authentication tokens on the client-side. This allows the application to retain the user's authentication state even if the user refreshes the page or navigates to a different part of the application.
  
    console.log("register :",user)

    dispatch(registerSuccess(user.jwt));
    // The purpose of dispatching the registerSuccess action is to trigger a state change in the Redux store. This allows the application to react to the successful registration, such as updating the UI to reflect the user's authenticated state or redirecting the user to a different page.

  } catch (error) {

    dispatch(registerFailure(error.message));
    
  }
};

// Login action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });

export const login = userData => async dispatch => {
  
  dispatch(loginRequest());

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);

    const user = response.data;

    if(user.jwt) localStorage.setItem("jwt",user.jwt)
    console.log("login ",user)

    dispatch(loginSuccess(user.jwt));

  } catch (error) {

    dispatch(loginFailure(error.message));

  }
};


const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });
//  get user from token
export const getUser = (jwt) => async (dispatch) => {

    dispatch(getUserRequest());

    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
        headers:{
          "Authorization":`Bearer ${jwt}`
        }
      });

      const user = response.data;
      console.log("user",user);
      dispatch(getUserSuccess(user));

    } catch (error) {
      dispatch(getUserFailure(error.message));
    }
  };

export const logout = () =>(dispatch)=> {
      dispatch({ type: LOGOUT, payload: null });
      localStorage.clear();
  };