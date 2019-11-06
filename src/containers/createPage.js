import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Header } from '../components';
import '../styles/index.scss';

export default function(ComposedComponent, routeConfig = {}) {
  class Layout extends Component {
    render() {
      const { isLoggedIn } = this.props;
      const { requiredAuth } = routeConfig;
      if (requiredAuth && !isLoggedIn) return <Redirect to="/404" />;

      return (
        <div className="container">
          <Header isLoggedIn={isLoggedIn} />
          <div className="e-content">
            <ComposedComponent {...this.props} />
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({ isLoggedIn: state.auth.isLoggedIn });

  return withRouter(connect(mapStateToProps)(Layout));
}
