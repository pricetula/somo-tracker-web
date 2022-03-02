import React from 'react';
import { SideMenuOpenContext } from 'src/context/sideMenuOpen';
import Dialog, { Dialogvariant } from '../Dialog';
import style from './Sidemenu.module.scss';

const Sidemenu = () => {
  const sideMenu = React.useContext(SideMenuOpenContext);
  const closeSidemenu = () => {
    sideMenu.setIsOpen(false);
  }
  return (
    <Dialog
      variant={Dialogvariant.LEFTSIDEMENU}
      isOpen={sideMenu.isOpen}
      onBackdropClick={closeSidemenu}
    >
      Content
    </Dialog>
  );
};

export default Sidemenu;
