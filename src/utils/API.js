import axios from 'axios';

import {BASE_URL,
        DUMMY,
        MUSIC,
        FILE} from '../constance';

export const API = {

  submitMessage(message) {
    const request = axios.post(`${BASE_URL}/${DUMMY}`, message);
    return request;
  },

  getFile(message) {
    const request = axios.post(`${BASE_URL}/${FILE}`, message);
    return request;
  },

  getMessage() {
    const request = axios.get(`${BASE_URL}/${DUMMY}`);
    return request;
  },

  submitMusic(message) {
    const request = axios.post(`${BASE_URL}/${DUMMY}/${MUSIC}`, message);
    return request;
  }
}
