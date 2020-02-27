import React, { PureComponent, Fragment } from 'react';
import debounce from 'lodash/debounce';
import { observer, inject } from 'mobx-react';
import { Spring } from 'react-spring/renderprops';
import { ButtonGroup, Button, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './drawer.module.scss';

const animConfig = {
  duration: 200
}

@inject('AppStore')
@observer
export default class Drawer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      windowWidth: window.innerWidth,
      isOpen: false
    }

    this.setWindowWidth = this.setWindowWidth.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)
    this.onRestClose = this.onRestClose.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', debounce(this.setWindowWidth, 100))

    this.setWindowWidth()

    setTimeout(() => {
      this.setState({
        ...this.state,
        isOpen: true
      })
    }, 10);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.setWindowWidth, 100))
  }

  setWindowWidth() {
    this.setState({
      ...this.state,
      windowWidth: window.innerWidth
    })
  }

  closeDrawer() {
    if(this.state.isOpen) {
      this.setState({
        ...this.state,
        isOpen: false
      })
    }
  }

  onRestClose() {
    if(!this.state.isOpen) {
      this.props.AppStore.closeDrawer()
    }
  }

  render() {
    return (
      <div className={styles['drawer']}>
        {
          this.state.windowWidth > 400 ? (
            <div className={styles['sidebar']}>
              <Spring
                to={{
                  opacity: this.state.isOpen ? 1 : 0,
                  translateX: this.state.isOpen ? 0 : 100
                }}

                config={animConfig}

                onRest={this.onRestClose}
              >
                {props => (
                  <Fragment>
                    <div
                      className={styles['dimmer']}
                      onClick={this.closeDrawer}
                      style={{
                        opacity: props.opacity
                      }}
                    />
                    <div
                      className={styles['menu']}
                      style={{
                        transform: `translateX(${props.translateX}%)`
                      }}
                    >
                      <Avatar
                        className={styles['avatar']}
                      >
                        BR
                      </Avatar>
                      <ButtonGroup
                        fullWidth
                        orientation='vertical'
                        className={styles['group']}
                      >
                        <Button
                          component={Link}
                          to='/'
                          onClick={this.closeDrawer}
                        >
                          Home
                        </Button>
                        <Button
                          component={Link}
                          to='/contact'
                          onClick={this.closeDrawer}
                        >
                          Contact Us
                        </Button>
                      </ButtonGroup>

                      <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        component='a'
                        href='/#book'
                        onClick={this.closeDrawer}
                      >
                        Book Now
                      </Button>
                    </div>
                  </Fragment>
                )}
              </Spring>
            </div>
          ) : (
            <div className={styles['bottom-bar']}>
              <Spring
                to={{
                  opacity: this.state.isOpen ? 1 : 0,
                  translateX: this.state.isOpen ? 0 : 100
                }}

                config={animConfig}

                onRest={this.onRestClose}
              >
                {props => (
                  <Fragment>
                    <div
                      className={styles['dimmer']}
                      onClick={this.closeDrawer}
                      style={{
                        opacity: props.opacity
                      }}
                    />
                    <div
                      className={styles['menu']}
                      style={{
                        transform: `translateY(${props.translateX}%)`
                      }}
                    >
                      <Avatar
                        className={styles['avatar']}
                      >
                        BR
                      </Avatar>
                      <ButtonGroup
                        fullWidth
                        orientation='vertical'
                        className={styles['group']}
                      >
                        <Button
                          component={Link}
                          to='/'
                          onClick={this.closeDrawer}
                        >
                          Home
                        </Button>
                        <Button
                          component={Link}
                          to='/contact'
                          onClick={this.closeDrawer}
                        >
                          Contact Us
                        </Button>
                      </ButtonGroup>

                      <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        component='a'
                        href='/#book'
                        onClick={this.closeDrawer}
                      >
                        Book Now
                      </Button>
                    </div>
                  </Fragment>
                )}
              </Spring>
            </div>
          )
        }
      </div>
    );
  }
}
