import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native'
import Points from '../components/Points';

Text.displayName = 'Text';

describe('Points component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Points />, {points: 0})
    expect(wrapper).toMatchSnapshot();
  });

  it('should have 1 Text component', () => {
    const wrapper = shallow(<Points points={0}/>);
    expect(wrapper.find('Text').length).toBe(1)
  })

  it('should have text showing the number of points', () => {
    const wrapper = shallow(<Points points={0}/>);
    expect(wrapper.contains(<Text>0</Text>)).toBe(true);
  })
})