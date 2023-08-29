import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import style from'./App.module.css'

function App() {
  return (
    <div className={style.App}>
      <Router>
        <Navbar />
        <header className="App-header">
          <h1>AthenaDesk Insights Dashboard</h1>
        </header>
        <main className="App-main">
          
          {/* Agrega más rutas y componentes aquí */}
        </main>
        <footer className="App-footer">
          <p>&copy; 2023 AthenaDesk Insights. All rights reserved.</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
