import React from 'react';
import PointsButton from './PointsButton';
import AppContext from '../AppContext';

export default class IncrementButton extends React.Component {
  render() {
    let props = this.props;
    return (
      <AppContext.Consumer>
        {context => {
          return (<PointsButton title={props.title} onPress={context.addPoint} color='green' />)
          }}
      </AppContext.Consumer>
    )
  }
}