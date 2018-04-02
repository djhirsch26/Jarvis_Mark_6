import {API} from '../utils/API';

import {
  MESSAGE_RECIEVED,
  MUSIC_RECIEVED,
  GET_FILE,
} from '../utils/commands';

export function submitMessage(message, callback) {
  const request = API.submitMessage(message);
  return (dispatch) => {
    request.then((result) => {
      callback(result.data)
      dispatch({
        type: MESSAGE_RECIEVED,
        payload: result.data
      })
    }).catch((e) =>{
    console.log("POST Message ERROR: ",e);
  })
  }
}

export function getFile(file_name, callback) {
  const message = {file_name: file_name}
  const request=API.getFile(message)
  return (dispatch) => {
    request.then((result) => {
      console.log(result)
      if(callback) {
        callback(result);
      }
      dispatch({
        type: GET_FILE,
        payload: {file: result.data}
      })
    }).catch((e) =>{
    console.log("getFile ERROR: "+e);
  })
  }
}

export function submitMusic(message, callback) {
  const request = API.submitMusic(message);
  return (dispatch) => {
    request.then((result) => {
      // var {message} = result.data;
      console.log(result);
      callback(result.data);
      dispatch({
        type: MUSIC_RECIEVED,
        payload: result.data
      })
    }).catch((e) =>{
    console.log("POST Music ERROR: "+e);
  })
  }
}

export function getMessage(callback) {
  const request = API.getMessage();
  return (dispatch) => {
    request.then((result) => {
      var {message} = result.data;
      dispatch({
        type: MESSAGE_RECIEVED,
        payload: message
      })
    }).catch((e) =>{
    console.log(e);
  })
  }
}
