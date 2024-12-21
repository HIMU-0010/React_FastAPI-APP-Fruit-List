import React from "react";
import './App.css';
import FruitList from './components/Fruits';

const App = () => {
  return (
    <div className="app-container"> 
      <header className="app-header"> 
        <h1>Fruit API Project</h1>
      </header>
      <main className="app-main">
        <FruitList />
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Fruit App</p>
      </footer>
    </div>
  );
};

export default App;