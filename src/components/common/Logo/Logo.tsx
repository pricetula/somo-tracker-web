import React from 'react';
import Link from 'src/components/common/Link';
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
    <Link href="#" customClass={style.logo}>
      {!hideIcon && <div className={style.icon} aria-label="Icon" />}
      {!hideText && (<strong className={textClassName}>SomoTracker</strong>)}
    </Link>
  );
}

export default Logo;
