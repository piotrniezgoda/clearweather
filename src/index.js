/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import './reset.css';
import store from 'redux/store';
import { theme } from 'theme/MainTheme';
import SearchPage from 'views/SearchPage';
import WeatherResoult from 'views/WeatherResoult';
import ErrorPage from 'views/ErrorPage';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

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
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
