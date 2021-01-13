import React from 'react';
import { PageProps } from 'gatsby';
import GlobalStyle from '@/styled/global';
import { ThemeProvider } from 'styled-components';
import theme from '@/styled/theme';
import Layout from '@/components/Layout/Layout';
import Content from '@/components/Content/Content';
import '@fontsource/playfair-display/700.css';
import '@fontsource/merriweather/700.css';
import { Helmet } from 'react-helmet';

const Home: React.FC<PageProps> = () => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ellianta</title>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-D1HZBYVJ22" />
      <script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-D1HZBYVJ22');`}
      </script>
    </Helmet>
    <GlobalStyle />
    <Layout>
      <Content />
    </Layout>
  </ThemeProvider>
);

export default Home;
