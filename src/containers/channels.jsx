import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveChannel } from '../actions';
import { createRef } from 'react';

class Channels extends Component {
  changeTheChannel(c){
    console.log(c);
  }

  render(){
   return(
    <div className='channels col-sm-3'>
      <h4>{this.props.activeChannel}</h4>
      <ul>
        {this.props.channels.map(ch => <li key={ch} onClick={this.changeTheChannel.bind(this,ch)}>{ch}</li>)}
      </ul>
    </div>
    )
 }
}


function mapDispatchToProps(dispatch) {
 return bindActionCreators(
   { setActiveChannel: setActiveChannel  },
   dispatch
   );
}

function mapStateToProps(state) {
  return {
    activeChannel: state.activeChannel,
    channels: state.channels
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
