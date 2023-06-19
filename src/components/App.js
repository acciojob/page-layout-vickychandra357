import React from 'react';
import PageLayout from './PageLayout';

const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}
      footer={<h2>© 2023 My Website. All right reserved.</h2>}
    >
      <h2>This is the content of my website.</h2>
    </PageLayout>
  );
};

export default App;
