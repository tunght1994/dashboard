import React from 'react';
import { WrapLoading } from './index.styles';

const LoadingFullScreen = () => {
  return (
    <WrapLoading>
      <div className="loading-spinner"></div>
    </WrapLoading>
  );
};

export default LoadingFullScreen;