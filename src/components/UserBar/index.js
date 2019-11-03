import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogout } from '../../actions';
import './styles.scss';

class UserBar extends Component {
  _onLogout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { email } = this.props;
    return (
      <div className="user-bar">
        <div className="greeting">
          <span>Welcome</span>
          <span>{email}</span>
        </div>
        <a className="button primary-button" href="/share">
          Share a movie
        </a>
        <button className="button secondary-button" onClick={this._onLogout}>
          Logout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.auth
});

export default connect(
  mapStateToProps,
  { logout: doLogout }
)(UserBar);
