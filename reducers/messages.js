
const defaultState = {
  messageList: [],
  updatedAt: 0,
};

export default function messages(state = defaultState, action) {
  const modifiedMessages = { ...state };
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      modifiedMessages.updatedAt = Date.now();
    default:
      return state;
  }
}
