import React, { Component } from 'react';
import MsgsList from '../containers/msgs_list';
import MsgForm from '../containers/message_form';


class App extends Component {
  render(){
    return(
    <div className='row'>
      <div className="logo col-sm-2"><img src="../../assets/signatureLogo.svg" alt="" /></div>
      <div className="channel-list col-sm-3"></div>
      <div className="msg-panel col-sm-7">
        <MsgsList />
        <MsgForm />
      </div>
    </div>
    )
  }
}

export default App;
