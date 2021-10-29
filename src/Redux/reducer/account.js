import {
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  VERIFY_EMAIL_LOADING,
  VERIFY_EMAIL_SUCCESS,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../types';

const initialState = {
  users: [],
  loading: true,
  error: null,
  msg: null,
};

export function register(state = initialState, action) {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action.payload,
      };
    case REGISTER_FAILURE:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function VerifyOtp(state = initialState, action) {
  switch (action.type) {
    case VERIFY_EMAIL_LOADING:
      return {
        loading: true,
      };
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action,
      };
    case VERIFY_EMAIL_FAILURE:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}
