import React from 'react';
import BreadcrumbNav from '../BreadcrumbNav';
import sytle from './Pagewrapper.module.scss';

interface PagewrapperProps {
  children: React.ReactNode
}

const Pagewrapper = (props: PagewrapperProps) => (
  <article className={sytle.pageWrapper}>
    <div>
      <header>
        <h1>Tests</h1>
      </header>
      <BreadcrumbNav />
    </div>
    {props.children}
  </article>
);

export default Pagewrapper;
