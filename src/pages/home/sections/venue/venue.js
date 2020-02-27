import React, { PureComponent } from 'react';
import { IconButton, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { Spring } from 'react-spring/renderprops';
import debounce from 'lodash/debounce';

import Page from '../../../../components/page/page';

import globals from '../../../../utils/globals.scss';
import styles from './venue.module.scss';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: globals.primary
    },
    secondary: {
      main: globals.secondary
    },
    background: {
      paper: globals.dark
    }
  }
})

export default class Venue extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      currentSlideIndex: 0,
      totalSlides: 2,
      muliplier: 1,
      windowWidth: window.innerWidth
    }

    this.moveRight = this.moveRight.bind(this)
    this.moveLeft = this.moveLeft.bind(this)
    this.setMultiplier = this.setMultiplier.bind(this)
    this.setWindowWidth = this.setWindowWidth.bind(this)
  }
  
  componentDidMount() {
    window.addEventListener('resize', debounce(this.setWindowWidth, 100))

    this.setWindowWidth()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.setWindowWidth, 100))
  }

  moveRight() {
    if(this.state.currentSlideIndex === this.state.totalSlides * this.state.muliplier - 1) {
      this.setState({
        ...this.state,
        currentSlideIndex: 0
      })
    } else {
      this.setState({
        ...this.state,
        currentSlideIndex: this.state.currentSlideIndex + 1
      })
    }
  }

  moveLeft() {
    if(this.state.currentSlideIndex === 0) {
      this.setState({
        ...this.state,
        currentSlideIndex: this.state.totalSlides * this.state.muliplier - 1
      })
    } else {
      this.setState({
        ...this.state,
        currentSlideIndex: this.state.currentSlideIndex - 1
      })
    }
  }

  setWindowWidth() {
    this.setState({
      ...this.state,
      windowWidth: window.innerWidth
    })

    this.setMultiplier()
  }

  setMultiplier() {
    if(this.state.windowWidth > Number(styles.breakpointOne)) {
      this.setState({
        ...this.state,
        muliplier: 1,
        currentSlideIndex: 0
      })
    } else {
      this.setState({
        ...this.state,
        muliplier: 2,
        currentSlideIndex: 0
      })
    }
  }

  render() {
    return (
      <div className={styles['venue-container']}>
        <Page.Section>
          <ThemeProvider
            theme={theme}
          >
            <div className={styles['venue']}>
              <h2 className={styles['header']}>
                Our venue...
              </h2>
              
              <div className={styles['carousel-container']}>
                <div className={styles['left']}>
                  <h3 className={styles['carousel-title']}>
                    Whether you are a small business, franchise or a group of people, we can provide you with the best the industry has to offer.
                  </h3>

                  <div className={styles['carousel-controls']}>
                    <IconButton
                      onClick={this.moveLeft}
                    >
                      <KeyboardArrowLeft fontSize='large' />
                    </IconButton>

                    <IconButton
                      onClick={this.moveRight}
                    >
                      <KeyboardArrowRight fontSize='large' />
                    </IconButton>
                  </div>
                </div>

                <div className={styles['right']}>
                  <div className={styles['carousel-main']}>
                    <Spring
                      to={{
                        xpos: this.state.currentSlideIndex * -100 / this.state.muliplier
                      }}
                    >
                      {props => (
                        <div
                          className={styles['carousel-item']}
                          style={{
                            transform: `translateX(${props.xpos}%)`
                          }}
                        >
                          <div className={styles['carousel-img']}>
                            <img alt='slide 1' src={require('../../../../static/images/production/slide_1.jpg')} />
                          </div>
                          <div className={styles['carousel-img']}>
                            <img alt='slide 2' src={require('../../../../static/images/production/slide_2.jpg')} />
                          </div>
                        </div>
                      )}
                    </Spring>
                    
                    <Spring
                      to={{
                        xpos: this.state.currentSlideIndex * -100 / this.state.muliplier
                      }}
                    >
                      {props => (
                        <div
                          className={styles['carousel-item']}
                          style={{
                            transform: `translateX(${props.xpos}%)`
                          }}
                        >
                          <div className={styles['carousel-img']}>
                            <img alt='slide 3' src={require('../../../../static/images/production/slide_3.jpg')} />
                          </div>
                          <div className={styles['carousel-img']}>
                            <img alt='slide 4' src={require('../../../../static/images/production/slide_2.jpg')} />
                          </div>
                        </div>
                      )}
                    </Spring>
                  </div>
                </div>
              </div>
            </div>
          </ThemeProvider>
        </Page.Section>
      </div>
    );
  }
}
