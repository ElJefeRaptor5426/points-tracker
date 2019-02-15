import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PointsDisplay from './components/PointsDisplay';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import AppContext from './AppContext';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addPoint = () => {
      this.setState(state => ({points: state.points+1}));
    };
    this.subPoint = () => {
      this.setState(state => ({points: state.points-1}));
    };
    this.state = {
      points: 0,
      addPoint: this.addPoint,
      subPoint: this.subPoint,
    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <View style={styles.container}>
          <DecrementButton title='-' />
          <View style={styles.pointsContainer}>
            <PointsDisplay />
          </View>
          <IncrementButton title='+' />
        </View>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  pointsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
  }
});
