import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMsgs } from '../actions';
import { createRef } from 'react';
import Msg from '../components/msg';
import MsgForm from './message_form';


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
     //window.setInterval(()=>{this.props.setMsgs()}, 5000);
  }

  componentDidMount() {
    this.refresher = setInterval(()=>{this.props.setMsgs()}, 2000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render(){
    return(
        <div className="msgs-list" ref={(list) => { this.list = list; }} style={{backgroundColor: 'purple', height: '90vh'}}>
          {this.props.msgs.map( msg => <Msg msg={msg} key={msg.created_at} />)}
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
  msgs: state.msgs.messages
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(MsgsList);
