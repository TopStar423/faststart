import querytring from 'query-string';
import axios from 'axios';

const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Frame-Options': 'Deny',
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
};

export default class RestService {
    endpoint = '';

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    handleErrors(response) {
        const error = new Error(response.statusText);
        error.response = response;
        error.responseData = response.data;
        throw error;
    }

    buildHeaders() {
        return defaultHeaders;
    }

    http(url, options) {
        return axios({
            url,
            ...options,
            headers: {
                ...this.buildHeaders(),
                ...(options || {}).headers,
            },
        })
            .then(response => response.data)
            .catch(this.handleErrors);
    }

    fetch(options) {
        return this.http(this.endpoint, options);
    }

    requestAction(id, action, data = {}, options) {
        if (id) {
            return this.http(`${this.endpoint}/${id}/${action}`, {
                method: 'POST',
                data,
                ...options,
            });
        }
        return this.http(`${this.endpoint}/${action}`, {
            method: 'POST',
            data,
            ...options,
        });
    }

    query(criteria, options) {
        return this.http(`${this.endpoint}?${querytring.stringify(criteria)}`, options);
    }

    findAll(options) {
        return this.http(this.endpoint, options);
    }

    find(id, options) {
        return this.http(`${this.endpoint}/${id}`, options);
    }

    save(resource, options) {
        if (resource.id) {
            return this.update(resource, options);
        }

        return this.create(resource, options);
    }

    create(resource, options) {
        return this.http(this.endpoint, {
            method: 'POST',
            data: resource,
            ...options,
        });
    }

    update(resource, options) {
        return this.http(`${this.endpoint}/${resource.id}`, {
            method: 'PUT',
            data: resource,
            ...options,
        });
    }

    delete(id, options) {
        const url = id ? `${this.endpoint}/${id}` : `${this.endpoint}`;
        return this.http(url, {
            method: 'DELETE',
            ...options,
        });
    }
}
