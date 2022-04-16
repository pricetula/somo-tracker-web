import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { DialogOpenContext } from 'src/context/dialogOpen';
import Button from '../Button';
import Logo from '../Logo';
import style from './TopNav.module.scss';

function TopNav() {
  const dialog = React.useContext(DialogOpenContext);
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  
  if (error) return <div>{error.message}</div>;

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
        {user ? user.name : (<a href="/api/auth/login">Login</a>)}
        <Button customClass={style.authMenubutton}>
          <i className="material-icons">more_vert</i>
        </Button>
      </section>
    </nav>
  )
};

export default TopNav;
