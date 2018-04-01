export const ADD_LIST = 'add-list';
export const CHOOSE_OPTION = 'choose-option';

export function addList(list) {
  return {
    type: ADD_LIST,
    payload: list
  };
}

export function choose(list, command) {
  return {
    type: CHOOSE_OPTION,
    payload: list
  };
}
