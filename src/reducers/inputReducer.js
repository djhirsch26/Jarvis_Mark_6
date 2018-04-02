import {
	UPDATE_INPUT,
	MESSAGE_RECIEVED,
	MUSIC_RECIEVED,
} from '../utils/commands';

var initialState = {
	current_input: "",
	message: "Welcome to Jarvis",
	music: "No Music",
}

export default function(state=initialState, action) {
	switch(action.type) {
  case UPDATE_INPUT:
    return {...state, current_input: action.payload};
	case MESSAGE_RECIEVED:
		console.log("MESSAGE PAYLOAD: " + action.payload);
		return {...state, message: action.payload.message}
	case MUSIC_RECIEVED:
		console.log("Music PAYLOAD: " + action.payload);
		return {...state, music: action.payload}
	default:
		return state;
	}
}
