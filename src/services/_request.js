import axios from 'axios';
import https from 'https';

const defaultSuccess = response => {
  try {
    const { data } = response;
    return data;
  } catch (error) {
    return {
      code: 500,
      message: error
    };
  }
};

const defaultError = error => {
  try {
    const { status, data } = error.response;
    return { code: status, message: data };
  } catch (err) {
    return {
      code: 500,
      message: err
    };
  }
};

class _api {
  constructor() {
    this.token = '';
    this.headers = {
      'Content-Type': 'application/json;charset=UTF-8'
    };
  }

  getTokenFromLocalStorage = () => {
    try {
      return window.localStorage.getItem('jwt');
    } catch (err) {
      return '';
    }
  };

  setToken = token => {
    this.token = token;
    window.localStorage.setItem('jwt', token);
  };

  request = (opts, successCallback = defaultSuccess, errorCallback = defaultError) => {
    return axios({ httpsAgent: new https.Agent({ rejectUnauthorized: false }), ...opts })
      .then(successCallback)
      .catch(errorCallback);
  };

  GET = (url, headers = {}, successCallback = defaultSuccess, errorCallback = defaultError) => {
    const opts = {
      method: 'GET',
      url,
      headers: { ...this.headers, ...headers },
      timeout: 3600
    };
    return this.request(opts, successCallback, errorCallback);
  };

  POST = (url, body = {}, headers = {}, successCallback = defaultSuccess, errorCallback = defaultError) => {
    const opts = {
      url: url,
      method: 'post',
      data: body instanceof FormData ? body : this.jsonToFormData(body),
      headers: { ...this.headers, ...headers }
    };
    return this.request(opts, successCallback, errorCallback);
  };

  PUT = (url, body = {}, headers = {}, successCallback = defaultSuccess, errorCallback = defaultError) => {
    const opts = {
      url: url,
      method: 'put',
      data: body instanceof FormData ? body : this.jsonToFormData(body),
      headers: { ...this.headers, ...headers }
    };

    return this.request(opts, successCallback, errorCallback);
  };

  PATCH = (url, body = {}, headers = {}, successCallback = defaultSuccess, errorCallback = defaultError) => {
    const opts = {
      url: url,
      method: 'patch',
      data: body instanceof FormData ? body : this.jsonToFormData(body),
      headers: { ...this.headers, ...headers }
    };

    return this.request(opts, successCallback, errorCallback);
  };

  DELETE = (url, body = {}, headers = {}, successCallback = defaultSuccess, errorCallback = defaultError) => {
    const opts = {
      url: url,
      method: 'DELETE',
      data: body instanceof FormData ? body : this.jsonToFormData(body),
      headers: { ...this.headers, ...headers }
    };

    return this.request(opts, successCallback, errorCallback);
  };

  addTokenToHeader = () => {
    if (!this.token) {
      this.token = this.getTokenFromLocalStorage();
    }
    return {
      Authorization: `Bearer ${this.token}`
    };
  };

  jsonToFormData = (obj, form, namespace) => {
    let fd = form || new FormData();
    let formKey;
    if (obj) {
      Object.keys(obj).forEach(property => {
        if (namespace) {
          formKey = `${namespace}[${property}]`;
        } else {
          formKey = property;
        }
        if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
          this.jsonToFormData(obj[property], fd, formKey);
        } else {
          fd.append(formKey, obj[property]);
        }
      });
    }

    return fd;
  };
}

export default new _api();
