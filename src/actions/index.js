import msgsFile from './msgs'
export function setMsgs() {
 return {
   type: 'SET_MSGS',
   payload: msgsFile
 }
}
