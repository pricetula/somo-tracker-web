import React, { ReactNode } from 'react';
import { DialogOpenContextProvider } from 'src/context/dialogOpen';
import TopNav from '../TopNav';
import Footer from '../Footer';
import Sidemenu from '../Sidemenu';
import Links from '../Sidemenu/components/Links';
import style from './Layout.module.scss';

function Layout({ children }: { children: ReactNode }) {
  return (
    <DialogOpenContextProvider>
      <TopNav />
      <Sidemenu />
      <main className={style.main}>
        <Links />
        <section className={style.content}>
          {children}
        </section>
      </main>
      <Footer />
    </DialogOpenContextProvider>
  )
};

export default Layout;