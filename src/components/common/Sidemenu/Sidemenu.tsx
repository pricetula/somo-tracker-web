import React from 'react';
import { DialogOpenContext } from 'src/context/dialogOpen';
import Dialog, { Dialogvariant } from '../Dialog';
import style from './Sidemenu.module.scss';

const Sidemenu = () => {
  const dialog = React.useContext(DialogOpenContext);
  const closeSidemenu = () => {
    dialog.setIsSideMenuOpen(false);
  }
  return (
    <Dialog
      variant={Dialogvariant.LEFTSIDEMENU}
      isOpen={dialog.isSideMenuOpen}
      onBackdropClick={closeSidemenu}
    >
      Content
    </Dialog>
  );
};

export default Sidemenu;
