import React from 'react';
import DynamicElement from '../DynamicElement';
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
  let wrapperHtmlEl: keyof JSX.IntrinsicElements = 'aside';
  let contentHtmlEl: keyof JSX.IntrinsicElements = 'section';
  let wrapperClassName = `${style.dialogWrapper} ${isOpen ? style.dialogWrapperVisible : ''} `;
  let contentClassName = `${style.dialogContent} `;

  switch (variant) {
    case Dialogvariant.LEFTSIDEMENU:
      contentClassName += style.leftsideMenu;
      break;

    case Dialogvariant.RIGHTSIDEMENU:
      contentClassName += style.rightsideMenu;
      break;

    default:
      wrapperHtmlEl = 'div';
      contentHtmlEl = 'dialog';
      contentClassName += style.default;
      wrapperClassName += style.dialogWrapperDialog
      break;
  }

  return (
    <DynamicElement
      el={wrapperHtmlEl}
      onClick={onBackdropClick}
      className={wrapperClassName}
    >
      <DynamicElement<'dialog'>
        el={contentHtmlEl}
        className={contentClassName}
        open={isOpen}
        onClick={(e) => { e.stopPropagation(); }}
      >
        {children}
      </DynamicElement>
    </DynamicElement>
  );
}

Dialog.defaultProps = {
  variant: Dialogvariant.DEFAULT,
  onBackdropClick: () => null,
  isOpen: false,
}

export default Dialog;
