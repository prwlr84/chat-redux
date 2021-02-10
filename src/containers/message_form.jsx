import React, { Component } from 'react';
import { createMessage } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUsr } from '../actions';

class MsgForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = {
      channel: 'general',
      author: this.props.author,
      content: this.state.value
    }
    createMessage(text);
  }

  componentWillMount(){
    this.props.setUsr();
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setUsr: setUsr },
 dispatch
 );
}

function mapStateToProps(state) {
  console.log(state);
 return {
  author: state.curUsr
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(MsgForm);
