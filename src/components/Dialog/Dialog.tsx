import React from 'react';
import { DialogOpenContext } from 'src/context/dialogOpen';
import style from './Dialog.module.scss';

const Dialog = () => {
  const dialog = React.useContext(DialogOpenContext);
  return (
    <aside
      onClick={() => dialog.setIsOpen(false)}
      className={`${style.dialogWrapper} ${dialog.isOpen ? style.dialogWrapperVisible : ''}`}
    >
      <section className={style.dialog} role="content">
        dd
      </section>
    </aside>
  );
}

export default Dialog;
