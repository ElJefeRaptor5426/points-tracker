import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native'
import PointsDisplay from '../components/PointsDisplay';

describe('PointsDisplay component', () => {
  it('should render correctly', () => {
    const wrapper = renderer.create(<PointsDisplay />, {points: 0})
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
})