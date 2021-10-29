import axios from 'axios';
import {GET_UPLOAD_PDF, UPLOAD_PDF_ERROR} from '../types';
// import * as RootNavigation from '../../Navigations/RootNavigation';
import {instance} from '../authToken';

export const GetuploadDocuments = payload => {
  return dispatch => {
    instance
      .get(
        'http://ec2-3-129-194-135.us-east-2.compute.amazonaws.com/v1/books',
        payload,
      )

      .then(res => {
        console.log(res);
        if (res.status === 200) {
          dispatch({
            type: GET_UPLOAD_PDF,
            payload: res.data,
            msg: 'Registration successful. Activation code has been sent to your email',
          });
          //  RootNavigation.navigate('Profiles');
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error.response) {
          const err = error.response.data.errors;
          dispatch({
            type: UPLOAD_PDF_ERROR,
            payload: err,
          });
        } else if (error.request) {
          dispatch({
            type: UPLOAD_PDF_ERROR,
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

// export const uploadDocuments = payload => {
//   return dispatch => {
//     dispatch({
//       type: LOGIN_LOADING,
//     });
//     instance
//       .post(
//         'http://ec2-3-129-194-135.us-east-2.compute.amazonaws.com/v1/books',
//         payload,
//       )

//       .then(res => {
//         console.log(res);
//         if (res.status === 200) {
//           dispatch({
//             type: LOGIN_SUCCESS,
//             payload: res.data,
//             msg: 'Registration successful. Activation code has been sent to your email',
//           });
//           // RootNavigation.navigate('Profiles');
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//         if (error.response) {
//           const err = error.response.data.errors;
//           dispatch({
//             type: LOGIN_FAILURE,
//             payload: err,
//           });
//         } else if (error.request) {
//           dispatch({
//             type: LOGIN_FAILURE,
//             payload: error.message,
//             msg: '',
//           });
//           //   console.log(error.request);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           // console.log('Error', error.message);
//         }
//       });
//   };
// };
