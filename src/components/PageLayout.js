import React from 'react';

const PageLayout = ({ header, footer, children }) => {
  return (
    <div>
      {header && <div>{header}</div>}
      <div>{children}</div>
      {footer && <div>{footer}</div>}
    </div>
  );
};

export default PageLayout;
