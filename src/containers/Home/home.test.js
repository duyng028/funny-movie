import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './index';
import { testStore } from '../../utils';

const setup = (storeState = {}) => {
  const store = testStore(storeState);
  const component = shallow(<HomePage store={store} />)
    .dive()
    .dive();
  return component;
};

describe('HomePage Component', () => {
  it('Should render without errors', () => {
    const component = setup({ movies: { list: [] } });
    const wrapper = component.find('.page-wrapper');
    expect(wrapper.length).toBe(1);
  });
});
