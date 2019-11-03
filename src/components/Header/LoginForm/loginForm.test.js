import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './index';
import { testStore } from '../../../utils';

const setup = (props = {}) => {
  const store = testStore();
  const component = shallow(<LoginForm {...props} store={store} />).dive();
  return component;
};

describe('LoginForm Component', () => {
  let loginForm;
  beforeEach(() => {
    loginForm = setup();
  });

  it('Should render without errors', () => {
    const wrapper = loginForm.find('.login-form');
    expect(wrapper.length).toBe(1);

    const form = loginForm.find('form');
    expect(form.length).toBe(1);

    const email = loginForm.find('#email');
    expect(email.length).toBe(1);

    const password = loginForm.find('#password');
    expect(password.length).toBe(1);
  });
});
