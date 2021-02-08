import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Msg extends Component {
  render(){
    return(
      <div className="msg">
        <h3>{this.props.msg.author}</h3>
        <h2>{this.props.msg.content}</h2>
        <p>{this.props.msg.created_at}</p>
      </div>
    )
  }
}
export default Msg;
