import {PROFILE_FAILURE, PROFILE_SUCCESS} from '../types';
import {instance} from '../../../authToken';

export const Getprofiles = () => {
  return dispatch => {
    try {
      instance.get('v1/profile').then(response => {
        dispatch({
          type: PROFILE_SUCCESS,
          payload: response.data,
        });
      });
    } catch (error) {
      dispatch({
        type: PROFILE_FAILURE,
        payload: error,
      });
    }
  };
};
