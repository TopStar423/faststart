import { call, put } from 'redux-saga/effects';
import RestService from '../utils/RestService';
import { resolve, reject } from '../middleware/simple_promise';
import * as types from '../actions';
import { STUDENT_API, STUDENT_ALL_API } from '../../constants/API';

const studentApi = new RestService(STUDENT_API);
const studentAllApi = new RestService(STUDENT_ALL_API);

export function* getStudents() {
  try {
    const token = localStorage.getItem('token');
    const apiOption = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const students = yield call(studentAllApi.findAll.bind(studentAllApi), apiOption);

    yield put({
      type: resolve(types.STUDENT_GET_ALL),
      payload: students
    })
  } catch (err) {
    yield put({
      type: reject(types.STUDENT_GET_ALL),
      error: err
    })
  }
}

export function* updateStudent({student}) {
  try {
    const token = localStorage.getItem('token');
    const apiOption = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const updatedStudent = yield call(studentApi.save.bind(studentApi), student, apiOption);

    yield put({
      type: resolve(types.STUDENT_UPDATE),
      payload: updatedStudent
    })
  } catch (err) {
    yield put({
      type: reject(types.STUDENT_UPDATE),
      error: err
    })
  }
}