import React from 'react';
import { shallow } from 'enzyme';
import Movie from './index';

const setup = (props = {}) => {
  const component = shallow(<Movie {...props} />);
  return component;
};

describe('Movie Component', () => {
  let movieComonent;
  beforeEach(() => {
    const data = {
      videoID: 'testID',
      description: 'Description',
      author: 'test@gmail.com',
      votingStatus: {}
    };
    movieComonent = setup({ data });
  });
  it('Should render without errors', () => {
    const wrapper = movieComonent.find('.movie-item');
    expect(wrapper.length).toBe(1);

    const title = movieComonent.find('h3.movie-title');
    expect(title.length).toBe(1);

    const metaData = movieComonent.find('.meta-data');
    expect(metaData.length).toBe(1);

    const description = movieComonent.find('.description');
    expect(description.length).toBe(1);
  });
});
