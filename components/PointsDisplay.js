import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PointsDisplay extends React.Component {
  render() {
    return (
      <View style={styles.display}>
        <Text
        style={styles.display}>{this.props.points}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  display: {
    color: '#000',
    fontSize: 42
  }
})