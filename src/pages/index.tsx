import React from 'react';
import { PageProps } from 'gatsby';
import GlobalStyle from '@/styled/global';
import { ThemeProvider } from 'styled-components';
import theme from '@/styled/theme';
import Layout from '@/components/Layout/Layout';

const Home: React.FC<PageProps> = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </Layout>
  </ThemeProvider>
);

export default Home;
