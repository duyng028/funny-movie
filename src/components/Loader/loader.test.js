import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

const setup = (props = {}) => {
  const component = shallow(<Loader {...props} />);
  return component;
};

describe('Loader Component', () => {
  let loader;
  beforeEach(() => {
    loader = setup();
  });
  it('Should render without errors', () => {
    const wrapper = loader.find('.loader');
    expect(wrapper.length).toBe(1);
  });
});
