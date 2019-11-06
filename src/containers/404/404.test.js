import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './index';

const setup = (props = {}) => {
  const component = shallow(<NotFoundPage {...props} />);
  return component;
};

describe('NotFoundPage Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  it('Should render without errors', () => {
    const wrapper = component.find('.not-found-page');
    expect(wrapper.length).toBe(1);

    const errorCode = component.find('.number-404');
    expect(errorCode.length).toBe(1);

    const errorText = component.find('.text-error');
    expect(errorText.length).toBe(1);
  });
});
