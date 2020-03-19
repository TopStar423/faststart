import createHistory from 'history/createBrowserHistory';
import RestService from './RestService';
import { getSession, setExpiredToken } from './auth.service';

const history = createHistory();

export default class AuthRestService extends RestService {
    buildHeaders() {
        const session = getSession();
        const token = session && session.token;
        return { ...super.buildHeaders(), Authorization: `Bearer ${token}` };
    }

    handleErrors({ response }) {
        if (response.status === 401) {
            const error = new Error(response.statusText);
            error.response = response;
            error.category = 'http';
            setExpiredToken();
            const { pathname = '', search } = window.location;
            let next = '';
            if (search) {
                next = search;
            } else if (pathname && pathname !== '/login') {
                next = `?next=${pathname}`;
            }
            history.push(`/login${next}`);
        }
        return super.handleErrors(response);
    }
}
