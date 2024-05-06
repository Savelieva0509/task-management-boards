import { ReactNode } from "react";
import css from "./Layout.module.scss"

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className={css.container}>{children}</main>;
};

export default Layout
