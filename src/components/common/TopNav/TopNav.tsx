import React from 'react';
import { DialogOpenContext } from 'src/context/dialogOpen';
import Button from '../Button';
import Logo from '../Logo';
import style from './TopNav.module.scss';

function TopNav() {
  const dialog = React.useContext(DialogOpenContext);
  return (
    <nav className={style.nav} aria-label="Primary">
      <section className={style.logoSidebarbuttonWrapper}>
        <Button
          customClass={style.sidebarbutton}
          leftIconName={dialog.isSideMenuOpen ? 'close' : 'menu'}
          onClick={() => dialog.setIsSideMenuOpen(!dialog.isSideMenuOpen)}
        />
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
