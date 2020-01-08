import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormEdit from './components/FormEdit';
import Folder from './components/Toggle'

function App() {
  return (
    <div className="App">
        <FormEdit></FormEdit>
        <Folder></Folder>
    </div>

  );
}

export default App;
