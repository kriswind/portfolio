import Link from 'next/link'
import React from 'react'
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href={'/'}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={'/about'}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={'/projects'}>Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={'/games'}>Games</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
