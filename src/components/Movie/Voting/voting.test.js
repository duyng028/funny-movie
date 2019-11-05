import React from 'react';
import { shallow } from 'enzyme';
import Voting from './index';
import { testStore } from '../../../utils';

const setup = (props = {}, storeState = {}) => {
  const store = testStore(storeState);
  const component = shallow(<Voting {...props} store={store} />)
    .dive()
    .dive();
  return component;
};

describe('Voting Component', () => {
  describe('For logged in user', () => {
    it('Should render without errors', () => {
      const component = setup({ videoID: 'testID' }, { auth: { isLoggedIn: true, email: 'test@gmail.com', votedMovies: {} } });
      const wrapper = component.find('.voting-actions');
      expect(wrapper.length).toBe(1);
    });

    it('Should render 2 buttons', () => {
      const component = setup({ videoID: 'testID' }, { auth: { isLoggedIn: true, email: 'test@gmail.com', votedMovies: {} } });
      const buttons = component.find('button');
      expect(buttons.length).toBe(2);

      const disabledBtn = buttons.find('[disabled=true]');
      expect(disabledBtn.length).toBe(0);
    });

    it('Should render up voted', () => {
      const component = setup({ videoID: 'testID' }, { auth: { isLoggedIn: true, email: 'test@gmail.com', votedMovies: { testID: 1 } } });
      const buttons = component.find('button');
      expect(buttons.length).toBe(1);

      const upvotedBtn = buttons.find('.like[disabled=true]');
      expect(upvotedBtn.length).toBe(1);

      const activeIcon = upvotedBtn.find('i.like-active-icon');
      expect(activeIcon.length).toBe(1);
    });

    it('Should render down voted', () => {
      const component = setup({ videoID: 'testID' }, { auth: { isLoggedIn: true, email: 'test@gmail.com', votedMovies: { testID: -1 } } });
      const buttons = component.find('button');
      expect(buttons.length).toBe(1);
      const downVotedBtn = buttons.find('.dislike[disabled=true]');
      expect(downVotedBtn.length).toBe(1);

      const activeIcon = downVotedBtn.find('i.dislike-active-icon');
      expect(activeIcon.length).toBe(1);
    });
  });

  it('Should not render for unlogged in user.', () => {
    const component = setup({ videoID: 'testID' }, { auth: { isLoggedIn: false } });
    const wrapper = component.find('.voting-actions');
    expect(wrapper.length).toBe(0);
  });
});
