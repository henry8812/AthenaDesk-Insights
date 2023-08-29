// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router
import styles from './Navbar.module.css';
import logo from '../../assets/images/main-logo.png'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.navbarMenu}>
        <Link to="/dashboard" className={styles.navbarMenuItem}>
          Dashboard
        </Link>
        <Link to="/tickets" className={styles.navbarMenuItem}>
          Tickets
        </Link>
        <Link to="/base-de-conocimiento" className={styles.navbarMenuItem}>
          Base de Conocimiento
        </Link>
        <Link to="/telefonia-inbound" className={styles.navbarMenuItem}>
          Telefonía Inbound
        </Link>
        <Link to="/reportes" className={styles.navbarMenuItem}>
          Reportes
        </Link>
      </div>
      <div className={styles.navbarIcon}>
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
