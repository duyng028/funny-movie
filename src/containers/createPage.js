import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header } from '../components';
import '../styles/index.scss';

export default function(ComposedComponent) {
  class Layout extends Component {
    render() {
      return (
        <div className="container">
          <Header />
          <div className="e-content">
            <ComposedComponent {...this.props} />
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({});

  return withRouter(connect(mapStateToProps)(Layout));
}
