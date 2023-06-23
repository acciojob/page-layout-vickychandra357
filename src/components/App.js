import React from 'react';
import Content from './Content';
import Header from './Header';
import './../styles/App.css'
import Footer from './Footer';


const App = () => {
  let x="Welcome to my website";
  let y="This is the content of my website."
  let z="© 2023 My Website. All right reserved.";

  return (
    <>
      <Header header={x}></Header>
      <Content content={y}/>
      {/* <Footer footer={z}/> */}
      © 2023 My Website. All right reserved.
    </>
  )

};

export default App;
