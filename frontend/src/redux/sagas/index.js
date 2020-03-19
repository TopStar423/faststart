import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../actions';
import AuthRestService from '../utils/AuthRestService';
import { reject, resolve } from '../middleware/simple_promise';

//Auth
import { login, register } from './auth';

//User
import { getStudents, updateStudent} from './student';

export function* sagas() {
    //Auth
    yield takeEvery(types.LOGIN, login);
    yield takeEvery(types.REGISTER, register);

    //User
    yield takeEvery(types.STUDENT_GET_ALL, getStudents);
    yield takeEvery(types.STUDENT_UPDATE, updateStudent);

}

export default sagas;
