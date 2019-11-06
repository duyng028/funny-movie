import React from 'react';
import { shallow } from 'enzyme';
import SharingMovieForm from './index';
import { testStore } from '../../utils';

const setup = (storeState = {}) => {
  const store = testStore(storeState);
  const component = shallow(<SharingMovieForm store={store} />)
    .dive()
    .dive();
  return component;
};

describe('SharingMovieForm Component', () => {
  let form;
  beforeEach(() => {
    const storeData = {
      auth: { email: 'test@gmail.com', isLoggedIn: true }
    };
    form = setup(storeData);
  });

  it('Should render without errors', () => {
    const wrapper = form.find('.sharing-movie-form');
    expect(wrapper.length).toBe(1);

    const formTag = form.find('form');
    expect(formTag.length).toBe(1);

    const urlInput = formTag.find('input');
    expect(urlInput.length).toBe(1);

    const button = formTag.find('button');
    expect(button.length).toBe(1);
  });
});
