/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { PageTransition } from '@steveeeie/react-page-transition';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import debounce from 'lodash.debounce';
import GlobalStyle from 'theme/GlobalStyle';
import './reset.css';
import store from 'redux/store';
import { theme } from 'theme/MainTheme';
import SearchPage from 'views/SearchPage';
import WeatherResoult from 'views/WeatherResoult';
import ErrorPage from 'views/ErrorPage';

const root = document.querySelector('#root');
root.style.height = `${window.innerHeight}px`;

window.addEventListener(
  'resize',
  debounce(() => {
    root.style.height = `${window.innerHeight}px`;
  }, 150),
);

ReactDOM.render(
  <Provider store={store}>
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet htmlAttributes={{ lang: 'pl-PL' }}>
          <title>Clearweather - aplikacja pogodowa</title>
          <meta
            name="description"
            content="Aplikacja dzięki której możesz sprawdzić aktualną pogodę w miejscach na całym świecie!"
            data-react-helmet="true"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" data-react-helmet="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
            data-react-helmet="true"
          />
        </Helmet>

        <Route
          render={({ location }) => {
            return (
              <PageTransition preset="moveToBottomFromTop" transitionKey={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={SearchPage} />
                  <Route exact path="/weather" component={WeatherResoult} />
                  <Route exact path="/error" component={ErrorPage} />
                </Switch>
              </PageTransition>
            );
          }}
        />
      </ThemeProvider>
    </MemoryRouter>
  </Provider>,
  root,
);
