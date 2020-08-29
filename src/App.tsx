import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./examples/connecting mobx to react/components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
