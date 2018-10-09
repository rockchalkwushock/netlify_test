import React from 'react';
import { mount } from 'enzyme'
import Header from './header'

describe('<Header />', () => {
  test('should show siteTitle', () => {
    const wrapper = mount(<Header siteTitle="Hello World" />)
    expect(wrapper.prop('siteTitle')).toBe('Hello World');
  });
});