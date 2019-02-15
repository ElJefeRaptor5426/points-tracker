import React from 'react';
import { Button } from 'react-native';
import AppContext from '../AppContext';

export default class DecrementButton extends React.Component {
  render() {
    let props = this.props;
    return (
      <AppContext.Consumer>
        {context => (<Button title={props.title} onPress={context.subPoint} />)}
      </AppContext.Consumer>
    )
  }
}