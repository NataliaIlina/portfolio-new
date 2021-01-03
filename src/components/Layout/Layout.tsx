import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { SLayout } from './Layout.styled';

const Layout: React.FC = ({ children }) => (
  <SLayout>
    <Header />
    <main>{children}</main>
    <Footer />
  </SLayout>
);

export default Layout;
