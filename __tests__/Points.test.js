import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native'
import Points from '../components/Points';

Text.displayName = 'Text';

describe('Points component', () => {
  it('should render correctly', () => {
    const wrapper = renderer.create(<Points points={0} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should have 1 Text component', () => {
    const wrapper = renderer.create(<Points points={0}/>);
    expect(wrapper.root.findAll(el => el.type === 'Text').length).toBe(1)
  })

  it('should have text showing the number of points', () => {
    const wrapper = renderer.create(<Points points={0}/>);
    expect(wrapper.root.findByType(Text).props.children).toEqual(0)
  })
})