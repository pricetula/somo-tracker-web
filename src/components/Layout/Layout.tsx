import React, { ReactNode } from 'react';
import { DialogOpenContextProvider } from 'src/context/dialogOpen';
import TopNav from '../TopNav';
import Footer from '../Footer';
import Dialog from '../Dialog';
import style from './Layout.module.scss';

function Layout({ children }: { children: ReactNode }) {
  return (
    <DialogOpenContextProvider>
      <TopNav />
      <Dialog />
      <main className={style.main}>
        {children}
      </main>
      <Footer />
    </DialogOpenContextProvider>
  )
};

export default Layout;