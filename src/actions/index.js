import msgsFile from './msgs'
export function setMsgs() {
//  return {
//    type: 'SET_MSGS',
//    payload: msgsFile
//  }
// }
  let p = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
  return {
    type: 'SET_MSGS',
    payload: p
  };
};
