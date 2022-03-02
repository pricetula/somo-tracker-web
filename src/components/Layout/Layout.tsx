import React, { ReactNode } from 'react';
import { DialogOpenContextProvider } from 'src/context/dialogOpen';
import { SideMenuOpenContextProvider } from 'src/context/sideMenuOpen';
import TopNav from '../TopNav';
import Footer from '../Footer';
import Sidemenu from '../Sidemenu';
import style from './Layout.module.scss';

function Layout({ children }: { children: ReactNode }) {
  return (
    <SideMenuOpenContextProvider>
      <DialogOpenContextProvider>
        <TopNav />
        <Sidemenu />
        <main className={style.main}>
          {children}
        </main>
        <Footer />
      </DialogOpenContextProvider>
    </SideMenuOpenContextProvider>
  )
};

export default Layout;