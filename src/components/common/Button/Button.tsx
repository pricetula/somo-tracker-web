import React from 'react';
import style from './Button.module.scss';

export enum Buttonvariant {
  DEFAULT = 'default',
  PRIMARY = 'primary'
}

export interface Buttonprops {
  variant?: Buttonvariant
  leftIconName?: string,
  rightIconName?: string,
  customClass?: string,
  onClick?: (e: any) => void,
  children?: React.ReactNode,
}

const Button = (props: Buttonprops) => (
  <button className={`${style.button} ${props.customClass}`} onClick={props.onClick}>
    {props.leftIconName && <i className="material-icons">{props.leftIconName}</i>}
    {props.children && <span>{props.children}</span>}
    {props.rightIconName && <i className="material-icons">{props.rightIconName}</i>}
  </button>
);

Button.defaultProps = {
  customClass: '',
  leftIconName: '',
  rightIconName: '',
  children: null,
  onClick: () => null,
  variant: Buttonvariant.DEFAULT
}

export default Button;
