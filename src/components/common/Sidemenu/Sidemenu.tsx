import React from 'react';
import { DialogOpenContext } from 'src/context/dialogOpen';
import style from './Sidemenu.module.scss';

const Sidemenu = () => {
  const dialog = React.useContext(DialogOpenContext);
  const closeSidemenu = () => {
    dialog.setIsSideMenuOpen(false);
  }
  return (
    <div>sss</div>
  );
};

export default Sidemenu;
