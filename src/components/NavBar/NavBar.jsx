// Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/main-logo.png'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={logo} alt="Logo" />
      </div>
      
      <div className={styles.navbarIcon}>
        
      <div className={styles.notificationIcon}>
          <i className="fa fa-message"></i>
        </div>
        <div className={styles.notificationIcon}>
          <i className="fa fa-bell"></i>
        </div>
        <div className={styles.profileIcon}>
          <img src="ruta-de-la-imagen-de-perfil.png" alt="Perfil" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
