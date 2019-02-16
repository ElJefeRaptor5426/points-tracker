import React from 'react';
import { StyleSheet, View } from 'react-native';
import PointsDisplay from './components/PointsDisplay';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import History from './components/History';
import AppContext from './AppContext';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addPoint = () => {
      let hist = this.state.history;
      hist.push({content: 'Added 1 point'})
      this.setState(state => ({points: state.points+1, history: hist}));
    };
    this.subPoint = () => {
      let hist = this.state.history;
      hist.push({content: 'Subtracted 1 point'})
      this.setState(state => ({points: state.points-1, history: hist}));
    };
    this.performAction = (action) => {
      let hist = this.state.history;
      hist.push({content: action.title});
      this.setState(state => ({points: state.points+action.amount, history: hist}))
    };
    this.state = {
      points: 0,
      addPoint: this.addPoint,
      subPoint: this.subPoint,
      history: [],
      actions: [
        {amount: -2, title: 'Single Minded Anhilation'},
        {amount: -1, title: 'Re-Roll one die'}
      ]
    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <View style={styles.parentContainer}>
          <View style={styles.container}>
            <DecrementButton title='-' />
            <View style={styles.pointsContainer}>
              <PointsDisplay />
            </View>
            <IncrementButton title='+' />
          </View>
          <View style={styles.history}>
            <History />
          </View>
        </View>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  pointsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
    marginTop: 50,
  },
  history: {
    maxHeight: 500,
    height: 500,
    width: '100%', 
    padding: 50,
  }
});
