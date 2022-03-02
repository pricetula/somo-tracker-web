import React, { ReactNode } from 'react';
import { DialogOpenContextProvider } from 'src/context/dialogOpen';
import TopNav from '../TopNav';
import Footer from '../Footer';
import Sidemenu from '../Sidemenu';
import style from './Layout.module.scss';

function Layout({ children }: { children: ReactNode }) {
  return (
    <DialogOpenContextProvider>
      <TopNav />
      <Sidemenu />
      <main className={style.main}>
        {children}
      </main>
      <Footer />
    </DialogOpenContextProvider>
  )
};

export default Layout;