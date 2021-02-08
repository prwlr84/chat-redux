import React, { Component } from 'react';
import MsgsList from '../containers/msgs_list';


class App extends Component {
  render(){
    return(
    <div className='row'>
      <MsgsList />
    </div>
    )
  }
}

export default App;
