import React, { ReactNode } from 'react';
import { SideMenuOpenContextProvider } from 'src/context/sideMenuOpen';
import TopNav from '../TopNav';
import Footer from '../Footer';
import Sidemenu from '../Sidemenu';
import style from './Layout.module.scss';

function Layout({ children }: { children: ReactNode }) {
  return (
    <SideMenuOpenContextProvider>
      <TopNav />
      <Sidemenu />
      <main className={style.main}>
        {children}
      </main>
      <Footer />
    </SideMenuOpenContextProvider>
  )
};

export default Layout;