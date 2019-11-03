import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let header;
  beforeEach(() => {
    header = setup();
  });
  it('Should render without errors', () => {
    const wrapper = header.find('.e-header');
    expect(wrapper.length).toBe(1);

    const logoIcon = header.find('.home-icon');
    expect(logoIcon.length).toBe(1);

    const h1 = header.find('h1');
    expect(h1.length).toBe(1);

    const rightCol = header.find('.right-col');
    expect(rightCol.length).toBe(1);
  });
});
