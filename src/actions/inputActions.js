var commands = require('../utils/commands');

import {
  UPDATE_INPUT
} from '../utils/commands'

export function update_input(value) {
  return {
    type: UPDATE_INPUT,
    payload: value
  };
}
