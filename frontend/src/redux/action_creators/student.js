import * as types from '../actions';

export const getAllStudent = students => ({
  type: types.STUDENT_GET_ALL,
  students
});

export const updateStudent = student => ({
  type: types.STUDENT_UPDATE,
  student
});