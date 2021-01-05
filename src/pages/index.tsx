import React from 'react';
import { PageProps } from 'gatsby';
import GlobalStyle from '@/styled/global';
import { ThemeProvider } from 'styled-components';
import theme from '@/styled/theme';
import Layout from '@/components/Layout/Layout';
import Content from '@/components/Content/Content';
import '@fontsource/playfair-display/700.css';
import '@fontsource/merriweather/700.css';

const Home: React.FC<PageProps> = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <Content />
    </Layout>
  </ThemeProvider>
);

export default Home;
