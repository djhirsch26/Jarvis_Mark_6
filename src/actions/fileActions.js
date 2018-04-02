import {
  SET_FILE,
  CLOSE_FILE_VIEW,
} from '../utils/commands'

export function setFile(file_index) {
  return {
    type: SET_FILE,
    payload: file_index
  };
}

export function closeFileView() {
  return {
    type: CLOSE_FILE_VIEW,
    payload: 1
  };
}
