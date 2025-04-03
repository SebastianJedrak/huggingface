import React from 'react';
import './LoadingIndicator.scss';

export const LoadingIndicator: React.FC = () => {
  return (
    <div className="ui-loading-container">
      <div className="loading-indicator"></div>
    </div>
  );
};

export default LoadingIndicator;
