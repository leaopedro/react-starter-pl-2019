export function receiveMessage(message) {
  message.receivedAt = Date.now();
  return {
    type: 'RECEIVE_MESSAGE',
    message,
  };
}

