import {GET_INTEREST, INTEREST_ERROR} from '../types';
import {instance} from '../authToken';

export const interest = () => {
  return dispatch => {
    try {
      instance
        .get(
          'http://ec2-3-129-194-135.us-east-2.compute.amazonaws.com/v1/interests',
        )
        .then(response => {
          dispatch({
            type: GET_INTEREST,

            payload: response.data,
          });
        });
    } catch (error) {
      dispatch({
        type: INTEREST_ERROR,
        payload: error,
      });
    }
  };
};
