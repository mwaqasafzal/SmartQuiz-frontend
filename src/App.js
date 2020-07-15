import React from 'react';
import {Home} from './components/Home/Home'
import AOS from 'aos'

function App() {
  AOS.init();
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
