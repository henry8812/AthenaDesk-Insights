import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { Tooltip } from 'react-tippy'; // Importa el componente Tooltip de react-tippy

import 'tippy.js/dist/tippy.css'; // Importa los estilos de tippy

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarLinks = [
    { icon: 'fa-chart-line', text: 'Dashboard', route: '/dashboard', description: 'View dashboard analytics' },
    { icon: 'fa-database', text: 'Data Table', route: '/data-table', description: 'Explore tabular data' },
    { icon: 'fa-book', text: 'Reports', route: '/reports', description: 'Access various reports' },
    { icon: 'fa-pencil', text: 'Admin', route: '/admin', description: 'Manage administration settings' },
    { icon: 'fa-chart-bar', text: 'Custom Charts', route: '/custom-charts', description: 'Create and view custom charts' },
    { icon: 'fa-table', text: 'Dynamic Tables', route: '/dynamic-tables', description: 'Interact with dynamic tables' },
    { icon: 'fa-cogs', text: 'Configuration', route: '/configuration', description: 'Configure dashboard settings' },
    { icon: 'fa-search', text: 'Detailed Analysis', route: '/detailed-analysis', description: 'Perform in-depth analysis' },
    { icon: 'fa-wrench', text: 'System Parameters', route: '/system-parameters', description: 'Manage system parameters' },
    { icon: 'fa-question-circle', text: 'Help & Support', route: '/help-support', description: 'Access help and support resources' },
    // Agrega más enlaces aquí
  ];

 return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <div className={styles.toggleButton} onClick={toggleSidebar}>
        <i className={`fas ${isSidebarOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`} />
      </div>
      <div className={styles.sidebarLinks}>
        {sidebarLinks.map(link => (
          <button className={styles.sidebarLink} key={link.route}>
            <i className={`fas ${link.icon}`} />
            <span>{link.text}</span>
            <div className={styles.tooltipWrapper}>
              <Tooltip title={link.description} position="right" arrow={true} theme="light" distance={50}>
                <i className="fa fa-question-circle" />
              </Tooltip>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
