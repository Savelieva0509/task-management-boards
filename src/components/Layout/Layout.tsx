import { ReactNode } from 'react';
import AppBar from '../AppBar/AppBar';
import Sidebar from '../SideBar/SideBar';
import css from './Layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={css.container}>
      <AppBar />
      <Sidebar />
      {children}
    </main>
  );
};

export default Layout;
