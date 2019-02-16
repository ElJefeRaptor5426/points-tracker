import React from 'react';
import PointsButton from './PointsButton';
import AppContext from '../AppContext';

export default class DecrementButton extends React.Component {
  render() {
    let props = this.props;
    return (
      <AppContext.Consumer>
        {context => (<PointsButton title={props.title} onPress={context.subPoint} color='red' />)}
      </AppContext.Consumer>
    )
  }
}