import React from 'react';
import PageLayout from './PageLayout';
import Header from './Header';
import './../styles/App.css'

const App = () => {
  let x="Welcome to my website";
  let y="This is the content of my website."
  let z="© 2023 My Website. All right reserved.";

  return (
    <div>
      <Header header={x}></Header>
      <PageLayout pageLayout={y}/>
      © 2023 My Website. All right reserved.
    </div>
  )

};

export default App;
