import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { Provider as StoreProvider } from 'mobx-react';
import loadable from 'react-loadable';

import globals from './utils/globals.scss';

import Loader from './components/pageLoader/pageLoader';

import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import ScrollToTop from './components/scrollToTop/scrollToTop';

import AppStore from './stores/appStore';

const stores = {
  AppStore
}

const Home = loadable({
  loader: () => import('./pages/home/home'),
  loading: Loader,
  timeout: 1000,
})

const Contact = loadable({
  loader: () => import('./pages/contact/contact'),
  loading: Loader
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: globals.primary,
      dark: globals.dark
    },
    secondary: {
      main: globals.secondary
    },
    text: {
      primary: globals.dark
    }
  }
})

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StoreProvider {...stores}>
          <Router>
            <Nav />
            <ScrollToTop />
            
            <Switch>
              <Route path='/contact' exact>
                <Contact />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>

            <Footer />
          </Router>
        </StoreProvider>
      </ThemeProvider>
    )
  }
}

export default App;
