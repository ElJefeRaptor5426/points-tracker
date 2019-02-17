import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native'
import PointsDisplay from '../components/PointsDisplay';

describe('PointsDisplay component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<PointsDisplay />, {points: 0})
    expect(wrapper).toMatchSnapshot();
  });
})