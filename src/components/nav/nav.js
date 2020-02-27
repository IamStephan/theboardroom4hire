import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import { Button, ButtonGroup, ThemeProvider, createMuiTheme, Avatar } from '@material-ui/core';
import { Home, Phone, Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import debounce from 'lodash/debounce';

import Drawer from '../drawer/drawer';

import globals from '../../utils/globals.scss';
import styles from './nav.module.scss';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: globals.primary
    },
    secondary: {
      main: globals.secondary
    }
  }
})

@inject('AppStore')
@observer
export default class Nav extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isScrollTop: true,
      windowWidth: window.innerWidth
    }

    this.setScrollTop = this.setScrollTop.bind(this)
    this.setWindowWidth = this.setWindowWidth.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.setScrollTop, 150))
    window.addEventListener('resize', debounce(this.setWindowWidth, 100))

    this.setScrollTop()
    this.setWindowWidth()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.setScrollTop, 150))
    window.removeEventListener('resize', debounce(this.setWindowWidth, 100))
  }

  setScrollTop() {
    this.setState({
      ...this.state,
      isScrollTop: window.scrollY === 0
    })
  }

  setWindowWidth() {
    this.setState({
      ...this.state,
      windowWidth: window.innerWidth
    })
  }

  render() {
    const { AppStore } = this.props

    return (
      <nav className={`${styles['nav']} ${this.state.isScrollTop ? '' :  styles['scrolled']}`}>
        <div className={styles['logo']}>
          <Avatar
            className={styles['avatar']}
          >
            BR
          </Avatar>
        </div>
        <ThemeProvider
          theme={theme}
        >
          {
            this.state.windowWidth > 580 ? (
              <div className={styles['actions']}>
                <ButtonGroup variant='outlined' className={styles['actions-group']}>
                  <Button
                    component={Link}
                    to='/'
                    startIcon={<Home/>}
                  >
                    Home
                  </Button>

                  <Button
                    component={Link}
                    to='/contact'
                    startIcon={<Phone/>}
                  >
                    Contact Us
                  </Button>
                </ButtonGroup>

                <Button
                  variant='contained'
                  color='primary'
                  component='a'
                  href='/#book'
                  className={styles['actions-cta']}
                >
                  Book Now
                </Button>
              </div>
            ) : (
              <div className={styles['menu']}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => {
                    AppStore.openDrawer()
                  }}
                >
                  <Menu />
                </Button>
              </div>
            )
          }
        </ThemeProvider>
        
        {
          AppStore.drawer.isOpen ? (<Drawer />) : null
        }
      </nav>
    );
  }
}
