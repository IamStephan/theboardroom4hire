import React, { PureComponent } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { ChatBubble, Tv, Fastfood } from '@material-ui/icons';
import { Spring } from 'react-spring/renderprops';
import debounce from 'lodash/debounce';

import Page from '../../../../components/page/page';
import styles from './benefit.module.scss';

export default class Benefit extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      currentSlideIndex: 1,
      windowWidth: window.innerWidth
    }

    this.setSlide = this.setSlide.bind(this)
    this.setWindowWidth = this.setWindowWidth.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', debounce(this.setWindowWidth, 100))

    this.setWindowWidth()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.setWindowWidth, 100))
  }

  setSlide(index) {
    this.setState({
      ...this.state,
      currentSlideIndex: index
    })
  }

  setWindowWidth() {
    this.setState({
      ...this.state,
      windowWidth: window.innerWidth
    })
  }

  render() {
    return (
      <Page.Section>
        <div className={styles['benefit']}>
          <h2 className={styles['header']}>
            With us, you’ll have
          </h2>

          {
            this.state.windowWidth > Number(styles.breakpointTwo) ? (
              <div className={styles['actions']}>
                <ButtonGroup
                  color='primary'
                >
                  <Button
                    variant={this.state.currentSlideIndex === 0 ? 'contained' : 'outlined'}
                    onClick={() => this.setSlide(0)}
                    startIcon={<ChatBubble />}
                  >
                    Meaning
                  </Button>
                  <Button
                    variant={this.state.currentSlideIndex === 1 ? 'contained' : 'outlined'}
                    onClick={() => this.setSlide(1)}
                    startIcon={<Tv />}
                  >
                    Functionality
                  </Button>
                  <Button
                    variant={this.state.currentSlideIndex === 2 ? 'contained' : 'outlined'}
                    onClick={() => this.setSlide(2)}
                    startIcon={<Fastfood />}
                  >
                    Catering
                  </Button>
                </ButtonGroup>
              </div>
            ) : (
              <div className={styles['actions-mobile']}>
                <Button
                  fullWidth
                  variant={this.state.currentSlideIndex === 0 ? 'contained' : 'outlined'}
                  onClick={() => this.setSlide(0)}
                  color='primary'
                  className={styles['btn']}
                >
                  <ChatBubble />
                </Button>

                <Button
                  fullWidth
                  variant={this.state.currentSlideIndex === 1 ? 'contained' : 'outlined'}
                  onClick={() => this.setSlide(1)}
                  color='primary'
                  className={styles['btn']}
                >
                  <Tv />
                </Button>

                <Button
                  fullWidth
                  variant={this.state.currentSlideIndex === 2 ? 'contained' : 'outlined'}
                  onClick={() => this.setSlide(2)}
                  color='primary'
                  className={styles['btn']}
                >
                  <Fastfood />
                </Button>
              </div>
            )
          }

          <div className={styles['carousel-container']}>
            <div className={styles['carousel']}>
              <Spring
                to={{
                  xPos: this.state.currentSlideIndex === 0 ? 0 : this.state.currentSlideIndex === 1 ? -100 : -200
                }}
              >
                {props => (
                  <div
                    className={styles['carousel-item']}
                    style={{
                      transform: `translateX(${props.xPos}%)`
                    }}
                  >
                    <img alt='Meaningful discussions are hard to maintain' src={require('../../../../static/images/production/slide_1.jpg')} className={styles['carousel-img']} />
                    <div className={styles['left']}>
                      <h3 className={styles['carousel-title']}>
                        Meaningful discussions are hard to maintain
                      </h3>
                      <p className={styles['carousel-content']}>
                        To have meaningful discussions are integral to maintaining effectiveness and company morale. To have the discussions you need, you need a floorspace that suites all your needs.
                      </p>
                    </div>

                    <div className={styles['right']} />
                  </div>
                )}
              </Spring>

              <Spring
                to={{
                  xPos: this.state.currentSlideIndex === 0 ? 0 : this.state.currentSlideIndex === 1 ? -100 : -200
                }}
              >
                {props => (
                  <div
                    className={styles['carousel-item']}
                    style={{
                      transform: `translateX(${props.xPos}%)`
                    }}
                  >
                    <img alt='Conveying your message is essential' src={require('../../../../static/images/production/slide_2.jpg')} className={styles['carousel-img']} />
                    <div className={styles['left']}>
                      <h3 className={styles['carousel-title']}>
                        Conveying your message is essential
                      </h3>
                      <p className={styles['carousel-content']}>
                        We provide you with all the tools you need to indulge your audience. With not just a huge display, but also a massive whiteboard to keep your message strong and your audience's focus.
                      </p>
                    </div>

                    <div className={styles['right']} />
                  </div>
                )}
              </Spring>

              <Spring
                to={{
                  xPos: this.state.currentSlideIndex === 0 ? 0 : this.state.currentSlideIndex === 1 ? -100 : -200
                }}
              >
                {props => (
                  <div
                    className={styles['carousel-item']}
                    style={{
                      transform: `translateX(${props.xPos}%)`
                    }}
                  >
                    <img alt='Long discussions can hunger your audience' src={require('../../../../static/images/production/slide_3.jpg')} className={styles['carousel-img']} />
                    <div className={styles['left']}>
                      <h3 className={styles['carousel-title']}>
                        Long discussions can hunger your audience
                      </h3>
                      <p className={styles['carousel-content']}>
                        Don't let your audience struggle to maintain focus. We offer you various catering options that will help ease long meetings.
                      </p>
                    </div>

                    <div className={styles['right']} />
                  </div>
                )}
              </Spring>
            </div>
          </div>
        </div>
      </Page.Section>
    );
  }
}
