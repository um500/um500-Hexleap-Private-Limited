
import { useContext } from 'react';
import './App.css';
import Assignment from './Assignment/Assignment';
import MainContext from './Context/MainContext';

function App() {
  return (
    <MainContext>
      <Assignment/>
    </MainContext>
  );
}

export default App;
