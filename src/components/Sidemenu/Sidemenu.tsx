import React from 'react';
import { SideMenuOpenContext } from 'src/context/sideMenuOpen';
import style from './Sidemenu.module.scss';

const Sidemenu = () => {
  const sideMenu = React.useContext(SideMenuOpenContext);
  return (
    <aside
        onClick={() => sideMenu.setIsOpen(false)}
        className={`${style.sidemenuWrapper} ${sideMenu.isOpen ? style.sidemenuWrapperVisible : ''}`}
      >
        <section className={style.sidemenu}>
          dd
        </section>
      </aside>
  );
}

export default Sidemenu;
