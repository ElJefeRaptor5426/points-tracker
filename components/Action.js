import React from 'react';
import AppContext from '../AppContext';

export default class Action extends React.Component {
  constructor(props) {
    super(props);
    this.perform = () => {
      this.props.performAction(this.props.action);
    }
  }

  render() {
    return (
      <Text onPress={this.perform}>{this.props.title}</Text>
    )
  }
}