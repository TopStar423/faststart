import { removeSession } from '../utils/auth.service';
import * as types from '../actions';
import history from '../../history';

export const login = credentials => ({
  type: types.LOGIN,
  credentials
});

export const register = params => ({
  type: types.REGISTER,
  params
});

export const logout = () => {
  removeSession();

  history.push('/login');

  return {
    type: types.LOGOUT
  }
};