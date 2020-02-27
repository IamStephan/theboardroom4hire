import React, { PureComponent } from 'react';
import { Button, ButtonGroup, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './footer.module.scss';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className={styles['footer']}>
        <section className={styles['top']}>
          <h3 className={styles['footer-title']}>
            The Boardroom
          </h3>

          <ButtonGroup className={styles['actions']}>
            <Button
              component={Link}
              to='/'
            >
              Home
            </Button>
            <Button
              component={Link}
              to='/contact'
            >
              Contact Us
            </Button>
          </ButtonGroup>
        </section>

        <Divider />

        <section className={styles['bottom']}>
          <div className={styles['legal']}>
            ©2020 - The Boardroom 4 hire | All right reserved
          </div>
        </section>
      </footer>
    );
  }
}
