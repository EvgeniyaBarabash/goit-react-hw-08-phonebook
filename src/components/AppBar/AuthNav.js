import { Link } from 'react-router-dom';
import React from 'react';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function AuthNav() {
  return (
    <div>
      <Link
        to={`/register`}
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Регистрация
      </Link>

      <Link to={`/login`} style={styles.link} activeStyle={styles.activeLink}>
        Логин
      </Link>
    </div>
  );
}
