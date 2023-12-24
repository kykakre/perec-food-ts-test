
import React from 'react';
import "./style/style.scss";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Title from "./components/Titile/Title";

function App() {
  return (
    <div className="App">
    <Header/>
      <Title/>
      <Footer/>
    </div>
  );
}

export default App;
