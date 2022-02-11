import React, { ReactNode } from 'react';
import TopNav from '../TopNav';
import Footer from '../Footer';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNav />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
};

export default Layout;