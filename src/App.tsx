import React from 'react';
import MainPage from './pages/MainPage';
import Header from './components/displays/Header';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
