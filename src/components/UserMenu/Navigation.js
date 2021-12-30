import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Link to="/" style={styles.link}>
        Главная
      </Link>
      
        <Link to="/contacts" style={styles.link}>
          Контакты
        </Link>
      
    </nav>
  );
};

export default Navigation;
