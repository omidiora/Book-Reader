import {PROFILE_FAILURE, GET_PROFILE, PROFILE_SUCCESS} from '../types';

const initialState = {
  profile: [],
  loading: true,
  error: null,
  msg: null,
};

export function profile(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        loading: true,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        payload: action.payload,
      };
    case PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}
