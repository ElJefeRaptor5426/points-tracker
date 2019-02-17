import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppContext from '../AppContext';
import Points from './Points';

export default class PointsDisplay extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <View style={styles.display}>
            <Text>Points:</Text>
            <Points points={context.points} />
          </View>
        )}
      </AppContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  display: {
    color: '#000',
    fontSize: 42,
    textAlign: 'center',
  }
})