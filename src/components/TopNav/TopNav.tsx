import React from 'react';
import Button from '../Button';
import Logo from '../Logo';
import style from './TopNav.module.scss';

function TopNav() {
  return (
    <nav className={style.nav} aria-label="Primary">
      <section className={style.logoSidebarbuttonWrapper}>
        <Button customClass={style.sidebarbutton} onClick={() => console.log("yoooooo")}>
          <i className="material-icons">menu</i>
        </Button>
        <Logo />
      </section>
      <section className={style.linksWrapper}>
        <Button onClick={() => console.log("yoooooo")}>
          <i className="material-icons">more_vert</i>
        </Button>
      </section>
    </nav>
  )
};

export default TopNav;
