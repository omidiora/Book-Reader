import {UPLOAD_PDF_ERROR, GET_UPLOAD_PDF} from '../types';

const initialState = {
  pdf: [],
  loading: true,
  error: null,
  msg: null,
};

export function Uploader(state = initialState, action) {
  switch (action.type) {
    case GET_UPLOAD_PDF:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        ...action.payload,
      };
    case UPLOAD_PDF_ERROR:
      return {
        loading: false,
        error: action.payload,
        // msg: action.msg,
      };

    default:
      return state;
  }
}
