import React from 'react';
import { Button } from 'react-native';
import AppContext from '../AppContext';

export default class IncrementButton extends React.Component {
  render() {
    let props = this.props;
    return (
      <AppContext.Consumer>
        {context => {
          console.log(context);
          return (<Button title={props.title} onPress={context.addPoint} />)
          }}
      </AppContext.Consumer>
    )
  }
}