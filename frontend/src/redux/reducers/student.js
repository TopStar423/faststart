import * as types from '../actions';
import { reject, resolve } from '../middleware/simple_promise';

const DEFAULT_STUDENT_STATE = {
  students: []
};

export const student = (state = DEFAULT_STUDENT_STATE, action = { type: 'invalid', payload: {} }) => {
  switch (action.type) {
    case resolve(types.STUDENT_GET_ALL):
      return {
        ...state,
        students: action.payload
      };
    case reject(types.STUDENT_GET_ALL):
      return {
        ...state,
        error: action.error
      };
    case resolve(types.STUDENT_UPDATE):
      const students = state.students;
      const student = action.payload;

      let newStudents = [];
      students.forEach((item) => {
        if (item.id === student.id) {
          newStudents.push(student);
        } else {
          newStudents.push(item);
        }
      });

      return {
        ...state,
        students: newStudents
      };
    case reject(types.STUDENT_UPDATE):
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
