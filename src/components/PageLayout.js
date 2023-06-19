import React from 'react';

const PageLayout = ({ header, footer, children }) => {
  return (
    <div>
      {header && <div>{header}</div>}
      <div>{children}</div>
      <div>
      {footer && <div>{footer}</div>}
      </div>
    </div>
  );
};

export default PageLayout;
