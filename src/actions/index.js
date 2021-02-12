import msgsFile from './msgs'
export function setMsgs() {
  const p = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
  return {
    type: 'SET_MSGS',
    payload: p
  };
};

export function createMessage(data) {
  console.log(data);
  fetch('https://wagon-chat.herokuapp.com/general/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

export function setUsr(){
  const usr =  "anonymus" //prompt("Username") ||

  return {
   type: 'SET_USR',
   payload: usr
   }
}

export function setActiveChannel(channels) {
  return{
    type: 'SET_ACTIVE_CHANNEL',
    payload: channels
  }
}
