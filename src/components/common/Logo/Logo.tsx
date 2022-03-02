import React from 'react';
import style from './Logo.module.scss';

export interface LogoProps {
  hideIcon?: boolean
  hideText?: boolean
}

function Logo({ hideIcon, hideText }: LogoProps) {
  let textClassName = style.text;

  if (hideIcon) {
    textClassName += ` ${style.textWithHiddenIcon}`;
  }

  return (
    <a href="#" className={style.logo}>
      {!hideIcon && <div className={style.icon} aria-label="Icon" />}
      {!hideText && (<strong className={textClassName}>SomoTracker</strong>)}
    </a>
  );
}

export default Logo;
