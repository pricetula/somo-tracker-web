import React, { ReactNode } from 'react';
import TopNav from '../TopNav';
import Footer from '../Footer';
import Sidemenu from '../Sidemenu';
import style from './Layout.module.scss';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNav />
      <main className={style.main}>
        <Sidemenu />
        <section className={style.content}>
          {children}
        </section>
      </main>
      <Footer />
    </>
  )
};

export default Layout;
