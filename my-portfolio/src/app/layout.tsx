import React, { ReactNode } from 'react';
import Nav from './components/nav/nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <html lang="en">
      <body>
      <Nav />
      <Header />
      <Main>{children}</Main>
      <Footer />
      </body>
    </html>
    </>

  );
};

export default RootLayout;

