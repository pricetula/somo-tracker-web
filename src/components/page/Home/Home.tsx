import React from 'react';
import Button from 'src/components/common/Button';
import Dialog from 'src/components/common/Dialog';
import { DialogOpenContext } from 'src/context/dialogOpen';
import style from './Home.module.scss';

const Home = () => {
  const dialog = React.useContext(DialogOpenContext);
  return (
    <div className={style.home}>
      <Button onClick={() => dialog.setIsOpen(true)}>Open</Button>
      <Dialog
        isOpen={dialog.isOpen}
        onBackdropClick={() => dialog.setIsOpen(false)}
        close={() => dialog.setIsOpen(false)}
      >

      </Dialog>
    </div>
  );
}

export default Home;
