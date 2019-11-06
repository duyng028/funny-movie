import React from 'react';
import './styles.scss';
import LogInForm from './LoginForm';
import UserBar from './UserBar';

const Header = props => {
  const { isLoggedIn } = props;
  return (
    <div className="e-header">
      <div className="row">
        <div className="col-sm-4 left-col">
          <a className="button logo" href="/">
            <i className="icon home-icon" />
            <h1 className="site-name">Funny Movie</h1>
          </a>
        </div>
        <div className="col-sm-8 right-col">{isLoggedIn ? <UserBar /> : <LogInForm />}</div>
      </div>
    </div>
  );
};

export default Header;
