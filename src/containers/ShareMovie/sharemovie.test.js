import React from 'react';
import { shallow } from 'enzyme';
import ShareMoviePage from './index';

const setup = (props = {}) => {
  const component = shallow(<ShareMoviePage {...props} />);
  return component;
};

describe('ShareMoviePage Component', () => {
  let page;
  beforeEach(() => {
    page = setup();
  });
  it('Should render without errors', () => {
    const wrapper = page.find('.sharing-movie-page');
    expect(wrapper.length).toBe(1);
  });
});
