import React from 'react';
import Logo from '../Logo';
import style from './TopNav.module.scss';

function TopNav() {
  return (
    <nav className={style.nav} aria-label="Primary">
      <Logo />
    </nav>
  )
};

export default TopNav;
