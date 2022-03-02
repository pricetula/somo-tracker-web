import React from 'react';
import style from './Dialog.module.scss';

export enum Dialogvariant {
  LEFTSIDEMENU = 'leftsideMenu',
  RIGHTSIDEMENU = 'rightsideMenu',
  DEFAULT = 'default',
}

interface Dialogprops {
  children: React.ReactNode,
  variant: Dialogvariant,
  onBackdropClick(): void,
  isOpen: boolean,
}

const Dialog = ({ children, variant, onBackdropClick, isOpen }: Dialogprops) => {
  let contentClassName = `${style.dialogContent} `;

  switch (variant) {
    case Dialogvariant.LEFTSIDEMENU:
      contentClassName += style.leftsideMenu;
      break;

    case Dialogvariant.RIGHTSIDEMENU:
      contentClassName += style.rightsideMenu;
      break;

    default:
      contentClassName += style.default;
      break;
  }

  return (
    <aside
      onClick={onBackdropClick}
      className={`${style.dialogWrapper} ${isOpen ? style.dialogWrapperVisible : ''}`}
    >
      <section className={contentClassName} role="content">
        {children}
      </section>
    </aside>
  );
}

Dialog.defaultProps = {
  variant: Dialogvariant.DEFAULT,
  onBackdropClick: () => null,
  isOpen: false,
}

export default Dialog;
