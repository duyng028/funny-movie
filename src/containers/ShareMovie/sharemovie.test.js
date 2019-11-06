import React from 'react';
import { shallow } from 'enzyme';
import ShareMoviePage from './index';

const setup = (props = {}) => {
  const component = shallow(<ShareMoviePage {...props} />);
  return component;
};

describe('Loader Component', () => {
  let loader;
  beforeEach(() => {
    loader = setup();
  });
  it('Should render without errors', () => {
    const wrapper = loader.find('.sharing-movie-page');
    expect(wrapper.length).toBe(1);
  });
});
