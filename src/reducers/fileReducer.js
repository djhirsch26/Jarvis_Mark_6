import {
	ADD_LIST,
  CHOOSE_FILE,
  SET_FILE,
  GET_FILE,
  MESSAGE_RECIEVED,
  OPEN,
  CLOSE_FILE_VIEW,
} from '../utils/commands';

var initialState = {
	files: [],
  file_index: -1,
  fileView: false,
}

export default function(state=initialState, action) {
	switch(action.type) {
	case MESSAGE_RECIEVED:
    switch(action.payload.command) {
      case OPEN:
        return {...state, file_index: 0, fileView: true, files: [action.payload.payload]};
      case CHOOSE_FILE:
        return {...state, fileView: true, files:  action.payload.payload};
    }
  case SET_FILE:
			return {...state, fileView: true, file_index: 0, file_index: action.payload};
  case CLOSE_FILE_VIEW:
			return {...state, fileView: false};
	default:
		return state;
	}
}
