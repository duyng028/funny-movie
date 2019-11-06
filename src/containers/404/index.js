import React from 'react';
import './styles.scss';

const NotFoundPage = () => {
  return (
    <div className="page-wrapper not-found-page">
      <div className="wrapper">
        <div className="number-404">404</div>
        <div className="text-error">Page not found</div>
      </div>
    </div>
  );
};

export default NotFoundPage;
