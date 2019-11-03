import React from 'react';
import './styles.scss';
import LogInForm from '../LoginForm';

const Header = () => {
  return (
    <div className="e-header">
      <div className="row">
        <div className="col-sm-4 left-col">
          <a className="button logo" href="/">
            <i className="icon home-icon" />
          </a>
          <h1 className="site-name">Funny Movie</h1>
        </div>
        <div className="col-sm-8 right-col">
          <LogInForm />
        </div>
      </div>
    </div>
  );
};

export default Header;
