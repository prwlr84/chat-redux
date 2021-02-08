import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMsgs } from '../actions';
import Msg from '../components/msg';


class MsgsList extends Component {
  static defaultProps = {
   msgs: [{
    "author":"anonymous98",
    "content":"Hello world!",
    "created_at":"2017-09-26T16:03:16.365Z"
  }]
  }


  componentWillMount(){
     this.props.setMsgs();
  }

  render(){
    return(
      <div className="msgs-list col-sm-7" style={{backgroundColor: 'purple', height: '100vh'}}>
        {this.props.msgs.map( msg => <Msg msg={msg} key={msg.content} />)}
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setMsgs: setMsgs },
 dispatch
 );
}

function mapStateToProps(state) {
 return {
  msgs: state.msgs
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(MsgsList);
