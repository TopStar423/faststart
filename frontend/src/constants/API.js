export const BACKEND_API_LOCATION   = process.env.REACT_APP_BACKEND_API_LOCATION || '/api';

//AUTH
export const LOGIN_API = `${BACKEND_API_LOCATION}/login`;
export const REGISTER_API = `${BACKEND_API_LOCATION}/register`;

// User
export const STUDENT_API = `${BACKEND_API_LOCATION}/student`;
export const STUDENT_ALL_API = `${BACKEND_API_LOCATION}/student/all`;