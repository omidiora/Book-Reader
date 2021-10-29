import {combineReducers, applyMiddleware} from 'redux';
import {register, VerifyOtp, login} from '../Redux/reducer/account';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
// import {profile} from '../Redux/reducer/Profile';
import {interest} from '../Redux/reducer/Interest';
import {Uploader} from '../Redux/reducer/uploadDocument';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks'],
};

const reducer = combineReducers({
  register,
  // VerifyOtp,
  // register,

  login,
  // profile,
  interest,
  Uploader,
});

export const store = createStore(reducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
