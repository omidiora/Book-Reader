import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  REGISTER_FAILURE,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
} from '../types';
import * as RootNavigation from '../../navigation/RootNavigation';
import {instance} from '../authToken';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RegisterAction = payload => {
  return dispatch => {
    dispatch({
      type: REGISTER_LOADING,
    });
    axios
      .post(
        'http://ec2-3-129-194-135.us-east-2.compute.amazonaws.com/v1/auth/register',
        payload,
      )

      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
            msg: 'Registration successful. Activation code has been sent to your email',
          });
          RootNavigation.navigate('VerifyHome');
          // AsyncStorage.setItem('user', res.data)
        }
      })
      .catch(function (error) {
        if (error.response) {
          const err = error.response.data.errors;
          dispatch({
            type: REGISTER_FAILURE,
            payload: err,
          });
        } else if (error.request) {
          dispatch({
            type: REGISTER_FAILURE,
            payload: error.message,
            msg: '',
          });
          //   console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log('Error', error.message);
        }
      });
  };
};

export const VerifyToken = data => {
  const URI = decodeURI(
    'http://ec2-3-129-194-135.us-east-2.compute.amazonaws.com/v1/auth/verify',
    data,
  );
  console.log(URI);
  return dispatch => {
    return axios
      .post(URI)
      .then(data => {
        dispatch({
          type: VERIFY_EMAIL_SUCCESS,
          data,
        });
      })
      .catch(err => {
        console.log(err.response.data);
        dispatch({
          type: VERIFY_EMAIL_FAILURE,
        });
      });
  };
};

export const loginAction = payload => {
  return dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });

    instance
      .post(
        'http://ec2-3-129-194-135.us-east-2.compute.amazonaws.com/v1/auth/login',
        payload,
      )

      .then(res => {
        console.log(res);
        if (res.status === 200) {
          dispatch(
            {
              type: LOGIN_SUCCESS,
              payload: res.data,
              msg: 'Registration successful. Activation code has been sent to your email',
            },
            RootNavigation.navigate('Register'),
          );
        }
      })
      .catch(function (error) {
        // console.log(error);
        if (error.response) {
          const err = error.response.data.errors;
          dispatch({
            type: LOGIN_FAILURE,
            payload: err,
          });
        } else if (error.request) {
          dispatch({
            type: LOGIN_FAILURE,
            payload: error.message,
            msg: '',
          });
          //   console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log('Error', error.message);
        }
      });
  };
};
