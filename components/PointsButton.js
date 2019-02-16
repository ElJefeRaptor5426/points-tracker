import React from 'react';
import { StyleSheet, Button } from 'react-native';

export default ({title, onPress, color}) => (
  <Button color={color} title={title} onPress={onPress} />
);

