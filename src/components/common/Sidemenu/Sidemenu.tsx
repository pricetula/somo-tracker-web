import React from 'react'
import IconList from './components/IconList'
import NavList from './components/NavList'
import style from './Sidemenu.module.scss'

const Sidemenu = () => {
  return (
    <aside className={style.wrapper}>
      <section className={style.search}>
        
      </section>
      <section className={style.navigation}>
        <IconList />
        <NavList />
      </section>
    </aside>
  );
};

export default Sidemenu;
