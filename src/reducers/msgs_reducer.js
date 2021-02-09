export default function(state,action) {
  if(state === undefined){
    return []
  }

  if (action.type === 'SET_MSGS'){
    return action.payload;
    console.log(action.payload);
  } else {
    return state;
    console.log('fucked');
  }
}
