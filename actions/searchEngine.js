import {receiveMessage} from "./index";

export function triggerSearch(query) {
  return (dispatch, getState) => {
    console.log('triggerSearch', query);
    if (query.toLowerCase() === 'hello') {
      setTimeout(() => {
        dispatch(receiveMessage({text: 'Hi! How are you doing?', author: 'computer'}))
      }, 1000);
    }
  };
}
