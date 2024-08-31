import React from 'react';
import Home from './home';
import BackgroundVideo from './components/BackgroundVideo';
import './App.css'; // Assuming you have this for global styling
/* src/App.css */


function App() {
  return (
    <div className="App">
      <BackgroundVideo/>
      <Home />
    </div>
  );
}

export default App;
