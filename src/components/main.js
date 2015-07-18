import React, {
  Component
} from 'react';
import MessagePanel from './message-panel';
import Form from './form';
import FirebaseConnector from './firebase-connector';
import {
  bindActionCreators
} from 'redux';
import * as actions from '../actions/actions';
import {
  connect
} from 'react-redux';

@connect(state => ({
  messages: state.default.messages,
  pendingMessages: state.default.pendingMessages,
  nameInput: state.default.nameInput,
  messageInput: state.default.messageInput
}))
export default class Main extends Component {

  render() {
    return (
      <FirebaseConnector
        dispatch={this.props.dispatch}
        pendingMessages={this.props.pendingMessages}>
        <div
          className="pure-g">
          <div
            className="pure-u-1-5"/>
          <div
            className="pure-u-4-5">
            <h1>
              Crypto chat
            </h1>
            <MessagePanel
              messages={this.props.messages} />
            </div>
          <div
            className="pure-u-1-5"/>
          <div
            className="pure-u-4-5">
            <Form
              messageInput={this.props.messageInput}
              nameInput={this.props.nameInput}
              {...bindActionCreators(actions, this.props.dispatch)} />
          </div>
        </div>
      </FirebaseConnector>
    );
  }
}