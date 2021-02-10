import React, { Component } from 'react';
import { createMessage } from '../actions/index';

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

    const text = {
      channel: 'general',
      author: 'B',
      content: this.state.value
    }
    createMessage(text);
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

export default MsgForm;
