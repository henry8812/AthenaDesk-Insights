// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Sidebar from './components/SideBar/Sidebar';
import LineChart from './components/charts/LineChart';
import DonutChart from './components/charts/DonutChart';
import style from './App.module.css';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    //setIsSidebarOpen(!isSidebarOpen);
  };
  

  return (
    <div className={style.app}>
      <Router>
        <Navbar />
        <div className={style.mainContainer}>
          <Sidebar toggleSidebar={toggleSidebar} />
          <div className={`${style.mainContent} ${isSidebarOpen ? style.contentWithSidebarOpen : ''}`}>
            <header className="App-header">
              <h1>AthenaDesk Insights Dashboard</h1>
            </header>
            <main className="App-main">
              {/**<LineChart data="" />**/}
              <div className={style.graphic1}>
              <DonutChart id="chart1" source="gti" title="GTI" width={350} dataUrl="tu_url_1" />
              <DonutChart id="chart2" source="comsistelco" title="COSISTELCO" width={350} dataUrl="tu_url_2" />
              <DonutChart id="chart3" source="raw" title="EFECTIVIDAD BRUTA COMSISTELCO" width={350} dataUrl="tu_url_2" />
              
              
              </div>
              

            </main>
            <footer className="App-footer">
              <p>&copy; 2023 AthenaDesk Insights. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
