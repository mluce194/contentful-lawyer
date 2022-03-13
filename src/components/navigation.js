import React from 'react'
import { Link } from 'gatsby'
import Logo from './logo'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
     <Logo></Logo>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/presentation/" activeClassName="active">
          Présentation
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/domaines/" activeClassName="active">
          Domaines d'intervention
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
