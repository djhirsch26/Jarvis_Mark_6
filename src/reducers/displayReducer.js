import {
	ADD_LIST
} from '../actions';

var initialState = {
	lists: []
}

export default function(state=initialState, action) {
	switch(action.type) {
  case ADD_LIST:
    return {...state, lists: state.lists.concat([action.payload])};
	default:
		return state;
	}
}
