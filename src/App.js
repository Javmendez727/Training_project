import './App.scss';
import React from "react";
import Navbar from './components/navbar';
import Description from './components/description';
import Photo from './components/photos';
import Footer from './components/footer';
import Postform from './components/postform';
import Listform from './components/listform';


function App() {
  return (
  <div className="App">
    <div>
      <Navbar />
    </div>
    <div className="App-header">
      <Description />
      <Photo />
      <Postform />
      <Listform />
      <Footer />  
    </div>
  </div>
  );
}

export default App;
