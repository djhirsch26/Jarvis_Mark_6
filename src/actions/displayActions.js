import {
  ADD_LIST
} from '../utils/commands'

// export const CHOOSE_OPTION = 'choose-option';

export function addList(list, command) {
  return {
    type: ADD_LIST,
    payload: {list: list, command: command}
  };
}

// export function choose(list, command) {
//   return {
//     type: CHOOSE_OPTION,
//     payload: {list: list, command: command}
//   };
// }
