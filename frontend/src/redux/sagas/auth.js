import { call, put } from 'redux-saga/effects';
import history from '../../history';
import RestService from '../utils/RestService';
import { resolve, reject } from '../middleware/simple_promise';
import * as types from '../actions';
import { setSession } from '../utils/auth.service';
import { LOGIN_API, REGISTER_API } from '../../constants/API';

const loginApi = new RestService(LOGIN_API);
const registerApi = new RestService(REGISTER_API);

export function* login({ credentials }) {
  const params = {
    email: credentials.email.toLowerCase(),
    password: credentials.password,
  };

  try {
    const { user, token } = yield call(loginApi.save.bind(loginApi), params);

    localStorage.setItem('token', token);

    yield put({
      type: resolve(types.LOGIN),
      payload: {
        user
      }
    });

    yield call(setSession, user);

    history.push('/student');
  } catch (err) {
    yield put({
      type: reject(types.LOGIN),
      error: err
    })
  }
}

export function* register({ params }) {
  const authparams = {
    email: params.email.toLowerCase(),
    password: params.password,
  };

  try {
    const { user, token } = yield call(registerApi.save.bind(registerApi), authparams);

    localStorage.setItem('token', token);
    const apiOption = {
      headers: { Authorization: `Bearer ${token}` }
    };

    yield put({
      type: resolve(types.REGISTER),
      payload: {
        user,
        token
      }
    });

    history.push('/student');
  } catch (err) {
    yield put({
      type: reject(types.REGISTER),
      error: err
    })
  }
}
