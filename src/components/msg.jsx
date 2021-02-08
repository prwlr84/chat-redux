import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Msg extends Component {
  render(){
    return(
      <div className="msg">
        <p>{this.props.msg.author}</p>
      </div>
    )
  }
}
export default Msg;
