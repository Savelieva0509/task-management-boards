import { ReactNode } from 'react';
import AppBar from '../AppBar/AppBar';
import Sidebar from '../SideBar/SideBar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <AppBar />
      <Sidebar />
      {children}
    </main>
  );
};

export default Layout;
