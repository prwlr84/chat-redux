import React, { Component } from 'react';
import MsgsList from '../containers/msgs_list';


class App extends Component {
  render(){
    return(
    <div className='row'>
      <div className="logo col-sm-2"><img src="../../assets/signatureLogo.svg" alt="" /></div>
      <div className="channel-list col-sm-3"></div>
      <MsgsList />
    </div>
    )
  }
}

export default App;
