import { ReactNode } from "react";
import './MainLayout.css'

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="mainLayout">{children}</div>
  );
};

export default MainLayout;
