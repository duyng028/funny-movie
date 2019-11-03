import React from 'react';
import { shallow } from 'enzyme';
import { testStore } from '../../../utils';
import UserBar from './index';

const setup = (props = {}) => {
  const store = testStore({ auth: { email: 'test@gmail.com', isLoggedIn: true } });
  const component = shallow(<UserBar {...props} store={store} />)
    .dive()
    .dive();
  return component;
};

describe('UserBar Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render without errors', () => {
    const wrapper = component.find('.user-bar');
    expect(wrapper.length).toBe(1);

    const form = component.find('.greeting');
    expect(form.length).toBe(1);

    const email = component.find('a.primary-button');
    expect(email.length).toBe(1);

    const password = component.find('button.secondary-button');
    expect(password.length).toBe(1);
  });
});
