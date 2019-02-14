import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PointsDisplay from './components/PointsDisplay';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
    };
  } 
  render() {
    return (
      <View style={styles.container}>
        <Text>Points:</Text>
        <PointsDisplay points={this.state.points} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
