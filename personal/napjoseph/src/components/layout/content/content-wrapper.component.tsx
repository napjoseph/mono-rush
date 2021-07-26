import React from 'react';

/* eslint-disable-next-line */
interface ContentWrapperProps {}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
};

export default ContentWrapper;
