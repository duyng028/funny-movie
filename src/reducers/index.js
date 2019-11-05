import { combineReducers } from 'redux';
import auth from './auth';
import movies from './movie';

export default combineReducers({ auth, movies });
