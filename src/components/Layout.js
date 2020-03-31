import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle, { theme } from '../utils/theme';
import config from '../utils/config';
import Header from './Header';

const Container = styled.div`
  background-color: #c6ecff;
`;

const IndexLayout = ({ hideHeader }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>{config.siteName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta description={config.description} />
      </Helmet>
      <GlobalStyle />
      {!hideHeader && <Header />}
      <Container>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <img src="/images/hero_man.webp" alt="site logo" />
                </div>
                <div className="column">Second column</div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  </ThemeProvider>
);

export default IndexLayout;
