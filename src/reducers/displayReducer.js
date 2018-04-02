import {
	ADD_LIST,
	GET_FILE,
} from '../utils/commands';


var initialState = {
	// Lists is an array of objects, each object is a command a list, the command
	// being the command that the choice from the list is applied to
	lists: [],
}

export default function(state=initialState, action) {
	switch(action.type) {
  case ADD_LIST:
    return {...state, lists: [{command: action.payload.command, list: action.payload.list}]};
	default:
		return state;
	}
}
