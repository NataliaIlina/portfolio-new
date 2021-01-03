import React from 'react';
import { PageProps } from 'gatsby';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import GlobalStyle from '@/styled/global';

const Home: React.FC<PageProps> = () => (
  <>
    <GlobalStyle />
    <Header />
    <main>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </main>
    <Footer />
  </>
);

export default Home;
