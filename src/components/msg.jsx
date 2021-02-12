import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ColorHash from 'color-hash'


class Msg extends Component {


  render(){
    const colorHash = new ColorHash();
    return(
      <div className="msg">
        <h3 style={{color: colorHash.hex(this.props.msg.author)}}>{this.props.msg.author}</h3>
        <h2>{this.props.msg.content}</h2>
        <p>{this.props.msg.created_at}</p>
      </div>
    )
  }
}
export default Msg;
