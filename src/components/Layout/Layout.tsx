import React, { ReactNode } from 'react';
import TopNav from '../TopNav';
import Footer from '../Footer';
import style from './Layout.module.scss';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNav />
      <main className={style.main}>
        {children}
      </main>
      <Footer />
    </>
  )
};

export default Layout;