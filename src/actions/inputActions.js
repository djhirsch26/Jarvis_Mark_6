export const UPDATE_INPUT = 'update-input';

export function update_input(value) {
  return {
    type: UPDATE_INPUT,
    payload: value
  };
}
