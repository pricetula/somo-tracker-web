import React from 'react';
import Button from '../Button';
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
  close(): void,
  onBackdropClick(): void,
  isOpen: boolean,
}

const Dialog = ({ close, children, variant, onBackdropClick, isOpen }: Dialogprops) => {
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

  const onEscClicked = React.useCallback((e: KeyboardEvent) => {
    if (isOpen && e.code === 'Escape' && close) {
      close();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  React.useEffect(() => {
    document.addEventListener("keydown", onEscClicked);
    return () => document.removeEventListener("keydown", onEscClicked);
  }, [onEscClicked]);

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
        {close && (
          <Button
            customClass={style.closebutton}
            leftIconName="close"
            onClick={close}
          />
        )}
        {children}
      </DynamicElement>
    </DynamicElement>
  );
}

Dialog.defaultProps = {
  variant: Dialogvariant.DEFAULT,
  onBackdropClick: () => null,
  isOpen: false,
  close: null,
}

export default Dialog;
