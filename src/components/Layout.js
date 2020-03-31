import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle, { theme } from '../utils/theme';
import config from '../utils/config';
import Header from './Header';

const Container = styled.div`
  background-color: ${props => props.theme.mainBrandColor};

  .hero-body {
    position: relative;
    animation: mymove 2.5s;
    animation-direction: reverse;
  }

  #div5 {
    animation-timing-function: ease-in;
  }

  @keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: 800px;
    }
  }
  .title {
    font-size: 6rem;
    font-family: playfair display, serif;
  }
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
        <section className="section">
          <div className="columns">
            <div className="column ">
              <img src="/images/hero_man.webp" alt="site logo" />
            </div>
            <div className="column">
              <section className="hero is-medium  is-bold">
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title is-capitalized has-text-weight-bold">
                      Winter Collection
                    </h1>
                    <h2 className="subtitle">Primary bold subtitle</h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </Container>
    </>
  </ThemeProvider>
);

export default IndexLayout;
