import React from 'react';
import { View, Text } from 'react-native';
import AppContext from '../AppContext';
import { FlatList } from 'react-native-gesture-handler';

export default () => (
  <AppContext.Consumer>
    {context => (
      <FlatList scrollEnabled={true} ListHeaderComponent={() => (<Text>History</Text>)} data={context.history} renderItem={({item}) => <Text>{item.content}</Text>} keyExtractor={(item, index) => index.toString()}/>
    )}
  </AppContext.Consumer>
)