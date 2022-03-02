import React from 'react';
import style from './Button.module.scss';

export enum Buttonvariant {
  DEFAULT = 'default',
  PRIMARY = 'primary'
}

export interface Buttonprops {
  variant?: Buttonvariant
  customClass: string,
  onClick?: (e: any) => void,
  children: React.ReactNode,
}

const Button = (props: Buttonprops) => (
  <button className={`${style.button} ${props.customClass}`} onClick={props.onClick}>
    {props.children}
  </button>
);

Button.defaultProps = {
  customClass: '',
  variant: Buttonvariant.DEFAULT
}

export default Button;
