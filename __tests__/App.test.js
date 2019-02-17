import {shallow, render} from 'enzyme';
import App from '../App';
import React from 'react';
import renderer from 'react-test-renderer';

describe('App component', () => {
  it('should render correctly', () => {
    const wrapper = renderer.create(<App />)
    expect(wrapper.toJSON()).toMatchSnapshot();
  })
})

