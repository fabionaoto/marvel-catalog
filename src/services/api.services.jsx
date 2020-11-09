import axios from "axios";

const API_URL = "https://gateway.marvel.com:443/v1/public/";
export const CancelToken = axios.CancelToken;

const md5 = require('js-md5');
let ts = new Date().getTime();
let stringToHash = ts + process.env.REACT_APP_PRIVATE_API_KEY  + process.env.REACT_APP_PUBLIC_API_KEY;
let hash = md5(stringToHash);

const apidefault = axios.create({ baseURL: API_URL, params: {
  ts: ts,
  apikey: process.env.REACT_APP_PUBLIC_API_KEY,
  hash: hash
} });

// Default Interceptors
apidefault.interceptors.response.use(
  async (response) => ({
    status: response.status,
    data: response.data,
    valid: response.data.valid,
  }),
  async (error) => {
    // handle error
    return Promise.reject({
      status: error.response.status,
      data: error.response.data,
      valid: false,
    });
  }
);

export const api = apidefault;
