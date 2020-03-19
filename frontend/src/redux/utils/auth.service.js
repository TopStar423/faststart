import decode from 'jwt-decode';

const keys = {
    SESSION: 'trackingSession',
    IS_TOKEN_EXPIRED: 'isTokenExpired',
};

export default keys;

export const setSession = session =>
    localStorage.setItem(keys.SESSION, JSON.stringify(session));

export const getSession = () => JSON.parse(localStorage.getItem(keys.SESSION));
export const removeSession = () => {
    localStorage.removeItem(keys.SESSION);
    localStorage.removeItem(keys.IS_TOKEN_EXPIRED);
};

export const setExpiredToken = () =>
    localStorage.setItem(keys.IS_TOKEN_EXPIRED, true);

export const getExpiredToken = () =>
    JSON.parse(localStorage.getItem(keys.IS_TOKEN_EXPIRED));
